import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Authentication from './pages/Authentication/Authentication'

function App() {
  return (
    <Routes>
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/auth/*" element={<Authentication />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default App
