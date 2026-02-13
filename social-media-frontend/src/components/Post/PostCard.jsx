import React, { useState } from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const PostCard = () => {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <Card className="p-5 mt-5">

      {/* Header */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="post settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Srinadh Bejawada"
        subheader="@Srinadh_Bejawada"
      />

      {/* Image */}
      <CardMedia
        component="img"
        height="350"
        image="https://i.pinimg.com/1200x/8b/8d/68/8b8d68a2fbfd23930de9dbc9da6fb0c2.jpg"
        alt="post image"
      />

      {/* Content */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nature is the physical world and life in its entirety—encompassing everything
           not made by humans, from plants and animals to landscapes, weather, and ecosystems. 
           It is an essential, self-sustaining 
          force providing vital resources like clean air, water, and food.
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions className="flex justify-between">

        {/* Left actions */}
        <div>
          <IconButton
            aria-label="like post"
            onClick={() => setLiked(!liked)}
          >
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>

        {/* Right action */}
        <div>
          <IconButton
            aria-label="save post"
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>

      </CardActions>

    </Card>
  )
}

export default PostCard
