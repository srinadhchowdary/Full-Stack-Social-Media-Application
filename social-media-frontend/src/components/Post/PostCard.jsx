import React, { useState } from 'react'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
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
import { useDispatch } from 'react-redux'
import { createCommentAction } from '../../Redux/Post/post.action'

const PostCard = ({ item }) => {

  const [showComments, setShowComments] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const dispatch = useDispatch()

  const handleShowComment = () => setShowComments(!showComments)

  const handleCreateComment = (content) => {
    if (!content.trim()) return

    const reqData = {
      postId: item.id,
      data: { content }
    }

    dispatch(createCommentAction(reqData))
  }

  return (
    <Card className="p-5 mt-5">

      {/* ---------------- HEADER ---------------- */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {item.user.firstName?.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={`${item.user.firstName} ${item.user.lastName}`}
        subheader={`@${item.user.firstName.toLowerCase()}_${item.user.lastName.toLowerCase()}`}
      />

      {/* ---------------- IMAGE ---------------- */}
      {item.image && (
        <CardMedia
          component="img"
          height="350"
          image={item.image}
          alt="post"
        />
      )}

      {/* ---------------- CAPTION ---------------- */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>

      {/* ---------------- ACTION BUTTONS ---------------- */}
      <CardActions className="flex justify-between">

        <div>

          {/* LIKE */}
          <IconButton onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>

          {/* COMMENT */}
          <IconButton onClick={handleShowComment}>
            <ChatBubbleIcon />
          </IconButton>

          {/* SHARE */}
          <IconButton>
            <ShareIcon />
          </IconButton>

        </div>

        {/* BOOKMARK */}
        <IconButton onClick={() => setBookmarked(!bookmarked)}>
          {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>

      </CardActions>

      {/* ---------------- COMMENTS SECTION ---------------- */}
      {showComments && (
        <section>

          <Divider />

          {/* ADD COMMENT */}
          <div className="flex items-center space-x-5 mx-3 my-5">

            <Avatar />

            <input
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="Write your comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleCreateComment(e.target.value)
                  e.target.value = ""
                }
              }}
            />

          </div>

          {/* COMMENT LIST */}
          <div className="mx-3 space-y-3 my-5 text-sm">

            {item.comments?.map((comment) => (

              <div
                key={comment.id}
                className="flex items-center space-x-4"
              >

                <Avatar
                  sx={{
                    height: "2rem",
                    width: "2rem",
                    fontSize: ".8rem"
                  }}
                >
                  {comment.user?.firstName?.charAt(0) || "U"}
                </Avatar>

                <div>
                  <p className="font-semibold text-xs">
                    {comment.user?.firstName}
                  </p>
                  <p>{comment.content}</p>
                </div>

              </div>

            ))}

          </div>

        </section>
      )}

    </Card>
  )
}

export default PostCard