import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'


const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <Button size='small'>
            Follow
          </Button>
        }
        title="code with srinadh"
        subheader="@codewithsrinadh"
      />
    </div>
  )
}

export default PopularUserCard
