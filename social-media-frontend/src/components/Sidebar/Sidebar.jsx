import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Divider,
  Avatar,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import { navigationMenu } from './SidebarNavigation'
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
    <div className="card h-screen flex flex-col justify-between py-5">
      
      <div className="space-y-8 pl-5">

        {/* Logo */}
        <div>
          <span className="logo font-bold text-xl">Social Media</span>
        </div>

        {/* Navigation */}
        <div className="space-y-8">
          {navigationMenu.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer flex space-x-3 items-center ${
                    isActive ? 'font-bold text-blue-600' : ''
                  }`
                }
              >
                <Icon />
                <p className="text-xl">{item.title}</p>
              </NavLink>
            )
          })}
        </div>

      </div>

      {/* User section */}
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3">
            <Avatar src="https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" />
            <div>
              <p className="font-bold">Code with Zosh</p>
              <p className="opacity-70">@CodeWithMosh</p>
            </div>
          </div>

          {/* Menu Button */}
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>

          {/* Menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
    
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

        </div>
      </div>

    </div>
  )
}

export default Sidebar
