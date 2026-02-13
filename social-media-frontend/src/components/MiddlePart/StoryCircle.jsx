import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>

        <div className='flex flex-col items-center mr-4 cursor-pointer'>

          <Avatar
         sx={{width:"5rem", height:"5rem"}}
         src='https://i.pinimg.com/736x/46/77/71/467771776f963b10bd0d400eaf5192a6.jpg' 
         >

          </Avatar>   
          <p>Codewith.. </p>

        </div>
      
    </div>
  )
}

export default StoryCircle
