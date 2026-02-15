import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Authentication from './pages/Authentication/Authentication'
import Message from './pages/Message/Message'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Authentication />} />
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/message" element={<Message />} />
      
    </Routes>
  ) 
}

export default App
