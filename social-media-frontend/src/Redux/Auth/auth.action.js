import { api, API_BASE_URL } from "../../config/api";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "./auth.actionType";

/* ---------------- LOGIN ---------------- */
/* ---------------- LOGIN ---------------- */
/* ---------------- LOGIN ---------------- */
export const loginUserAction = ({ data }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await api.post("/auth/signin", data);

    console.log("LOGIN RESPONSE 👉", response.data); // ✅ JWT here

    const token = response.data.token;

    localStorage.setItem("jwtToken", token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });

  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};


/* ---------------- REGISTER ---------------- */
export const registerUserAction = ({ data }) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });

    const response = await api.post("/auth/signup", data);

    const token = response.data.token;

    localStorage.setItem("jwtToken", token);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: token,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};


/* ---------------- GET PROFILE ---------------- */
export const getProfileAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });

    const response = await api.get("/api/users/profile");

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};


/* ---------------- UPDATE PROFILE ---------------- */
export const updateProfileAction = ({ reqData, jwt }) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const response = await api.post("/api/users/", reqData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};
