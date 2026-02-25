import React, { useState } from 'react'
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
} from '@mui/material'
import { useFormik } from 'formik'
import ImageIcon from '@mui/icons-material/Image'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import { uploadToCloudinary } from '../../utils/uploadToCloudinary'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '0.6rem',
  outline: 'none',
}

const CreatePostModal = ({ handleClose, open }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  /* ---------------- FORMIK ---------------- */
  const formik = useFormik({
    initialValues: {
      caption: '',
      image: '',
      video: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      try {
        console.log('Form Values 👉', values)
        // API call will go here
        handleClose()
      } finally {
        setIsLoading(false)
      }
    },
  })

  /* ---------------- HANDLERS ---------------- */
  const handleSelectImage = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setIsLoading(true)
    try {
      const imageUrl = await uploadToCloudinary(file, 'image')
      setSelectedImage(imageUrl)
      setSelectedVideo(null)
      formik.setFieldValue('image', imageUrl)
      formik.setFieldValue('video', '')
    } catch (error) {
      console.error('Image upload failed', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectVideo = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setIsLoading(true)
    try {
      const videoUrl = await uploadToCloudinary(file, 'video')
      setSelectedVideo(videoUrl)
      setSelectedImage(null)
      formik.setFieldValue('video', videoUrl)
      formik.setFieldValue('image', '')
    } catch (error) {
      console.error('Video upload failed', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>

          {/* Header */}
          <div className="flex space-x-4 items-center mb-4">
            <Avatar />
            <div>
              <p className="font-bold text-lg">Code with Zosh</p>
              <p className="text-sm text-gray-500">@CodewithZosh</p>
            </div>
          </div>

          {/* Caption */}
          <textarea
            name="caption"
            placeholder="Write a caption..."
            rows="4"
            className="w-full border rounded-md p-2 outline-none"
            value={formik.values.caption}
            onChange={formik.handleChange}
          />

          {/* Media Buttons */}
          <div className="flex space-x-6 items-center mt-4">

            {/* Image */}
            <div className="flex items-center space-x-1">
              <input
                type="file"
                accept="image/*"
                hidden
                id="image-input"
                onChange={handleSelectImage}
              />
              <label htmlFor="image-input">
                <IconButton color="primary" component="span">
                  <ImageIcon />
                </IconButton>
              </label>
              <span>Image</span>
            </div>

            {/* Video */}
            <div className="flex items-center space-x-1">
              <input
                type="file"
                accept="video/*"
                hidden
                id="video-input"
                onChange={handleSelectVideo}
              />
              <label htmlFor="video-input">
                <IconButton color="primary" component="span">
                  <VideoCallIcon />
                </IconButton>
              </label>
              <span>Video</span>
            </div>

          </div>

          {/* Preview */}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="preview"
              className="mt-4 rounded-md h-[200px] w-full object-cover"
            />
          )}

          {selectedVideo && (
            <video
              src={selectedVideo}
              controls
              className="mt-4 rounded-md h-[250px] w-full object-cover"
            />
          )}

          {/* Submit */}
          <div className="flex justify-end mt-5">
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: '1.5rem' }}
              disabled={isLoading}
            >
              Post
            </Button>
          </div>

        </form>

        {/* Loader */}
        <Backdrop
          open={isLoading}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Modal>
  )
}

export default CreatePostModal