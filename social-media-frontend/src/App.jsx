import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Authentication from "./pages/Authentication/Authentication";
import Message from "./pages/Message/Message";
import { useEffect } from "react";
import { getProfileAction } from "./Redux/Auth/auth.action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const jwt = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (jwt) {
      dispatch(getProfileAction());
    }
  }, [dispatch, jwt]);

  return (
    <Routes>
      {!jwt ? (
        <Route path="/*" element={<Authentication />} />
      ) : (
        <>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
