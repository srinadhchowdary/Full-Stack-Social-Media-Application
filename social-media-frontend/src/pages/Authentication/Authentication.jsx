import React from 'react'
import { Card, Grid } from '@mui/material'
import Login from './Login'
import Register from './Register'
import './Authentication.css'
import { Route, Routes } from 'react-router-dom'

const Authentication = () => {
  return (
    <Grid container className="auth-container">

      {/* Image - 70% */}
      <Grid size={{ xs: 12, md: 8 }} className="auth-image">
        <img
          src="https://previews.123rf.com/images/ppbig/ppbig1612/ppbig161200352/69893417-people-connection.jpg"
          alt="People connection"
        />
      </Grid>

      {/* Form - 30% */}
      <Grid size={{ xs: 12, md: 4 }} className="auth-form-section">
        <Card className="auth-card">
          <div className="flex flex-col items-center mb-6 space-y-2">
            <h1 className="logo text-center text-3xl font-semibold">
              Social Web Application
            </h1>

            <p className="text-center w-[85%]">
              Connecting people, sharing moments, and building communities in real time.
            </p>
          </div>

          {/* Toggle when needed */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>

        </Card>
      </Grid>

    </Grid>
  )
}

export default Authentication
