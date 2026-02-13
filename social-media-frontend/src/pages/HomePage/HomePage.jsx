import React from 'react'
import { Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import MiddlePart from '../../components/MiddlePart/MiddlePart'
import Reels from '../../components/Reels/Reels'
import CreateReelsForm from '../../components/Reels/CreateReelsForm'
import Profile from '../Profile/Profile'
import HomeRight from '../../components/HomeRight/HomeRight'
import Sidebar from '../../components/Sidebar/Sidebar'

const HomePage = () => {
  return (
    <div className="px-20">
      <Grid container spacing={0}>

        {/* Sidebar */}
        <Grid size={{ xs: 0, lg: 3 }}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        {/* Main Content */}
        <Grid
          size={{ xs: 12, lg: 6 }}
          className="px-5 flex justify-center"
        >
          <Routes>
            <Route index element={<MiddlePart />} />
            <Route path="reels" element={<Reels />} />
            <Route path="create-reels" element={<CreateReelsForm />} />
            <Route path="profile/:id" element={<Profile />} />
          </Routes>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 0, lg: 3 }} className="relative">
          <div className="sticky top-0">
            <HomeRight />
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default HomePage
