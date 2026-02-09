import React from 'react'
import { Card, Grid } from '@mui/material'
import Login from './Login'
import Register from './Register'
import './Authentication.css'

const Authentication = () => {
  return (
    <Grid container className="auth-container">

      {/* Image - 70% */}
      <Grid item xs={12} md={8} className="auth-image">
        <img
          src="https://previews.123rf.com/images/ppbig/ppbig1612/ppbig161200352/69893417-people-connection.jpg"
          alt="People connection"
        />
      </Grid>

      {/* Login - 30% */}
      <Grid item xs={12} md={4} className="auth-form-section">
        <Card className="auth-card">
          <div className="flex flex-col items-center mb-6 space-y-2">
            <h1 className="logo text-center text-3xl font-semibold">
              Social Web Application
            </h1>

            <p className="text-center w-[85%]">
              Connecting people, sharing moments, and building communities in real time.
            </p>

          </div>


          {/* <Login /> */}
          <Register />
        </Card>
      </Grid>

    </Grid>
  )
}

export default Authentication
