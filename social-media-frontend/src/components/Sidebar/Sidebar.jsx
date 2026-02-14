import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Divider,
  Avatar,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { navigationMenu } from './SidebarNavigation'

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div
      className="
        h-[95vh]
        m-4
        flex
        flex-col
        justify-between
        border
        border-gray-300
        rounded-xl
        bg-white
        shadow-sm
        py-5
      "
    >
      {/* TOP SECTION */}
      <div className="space-y-8 px-5">

        {/* Logo */}
        <div>
          <span className="logo font-bold text-xl">Social Media</span>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          {navigationMenu.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex items-center space-x-3 px-3 py-2 rounded-lg
                  cursor-pointer transition-all
                  ${isActive ? 'bg-gray-100 font-bold text-blue-600' : 'hover:bg-gray-50'}
                  `
                }
              >
                <Icon />
                <p className="text-lg">{item.title}</p>
              </NavLink>
            )
          })}
        </div>

      </div>

      {/* BOTTOM USER SECTION */}
      <div>
        <Divider />

        <div className="px-5 pt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" />
            <div>
              <p className="font-bold">Code with Zosh</p>
              <p className="text-sm opacity-70">@CodeWithMosh</p>
            </div>
          </div>

          {/* Menu Button */}
          <Button onClick={handleClick}>
            <MoreVertIcon />
          </Button>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
