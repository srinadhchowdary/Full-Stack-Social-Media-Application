import { Avatar, Card, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from './StoryCircle';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../Post/PostCard';

const story=[11,1,1,1,1]
const post=[1,1,1,1,1]
const MiddlePart = () => {

  const handleOpenCreatePostModal=()=>{ 
    console.log("Open Create Post Modal")
  }
  return (
    <div className='px-20'>
      <section className='py-5 flex items-center p-5 rounded -b-md'>

        <div className='flex flex-col items-center mr-4 cursor-pointer'>

          <Avatar 
         sx={{width:"5rem", height:"5rem"}}
        //  src='https://i.pinimg.com/736x/46/77/71/467771776f963b10bd0d400eaf5192a6.jpg' 
         >

          <AddIcon sx={{fontSize:"3rem"}}/>
          </Avatar>   
          <p>New </p> 
        </div>  
        {/* Stories list (HORIZONTAL) */}
        <div className="flex items-center space-x-4 overflow-x-auto">
          {story.map((item, index) => (
            <StoryCircle key={index} />
          ))}
        </div>

      </section>

      <Card className='p-5 mt-5'>
        <div className='flex justify-between'>

          <Avatar/>
          <input 
          readOnly
          className='outline-none w-[90%]
          rounded-full px-5 bg-transparent border-[#3b4054] border' type='text' />

        </div>

        <div className='flex justify-center space-x-9 mt-5'>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <IconButton color='primary' onClick=
            {handleOpenCreatePostModal}>
              <ImageIcon/>
            </IconButton>

            <span className='text-sm text-gray-500'>Media</span>
          </div>

          <div className='flex items-center space-x-2 cursor-pointer'>
            <IconButton color='primary' onClick=
            {handleOpenCreatePostModal}>
              <VideocamIcon/>
            </IconButton>

            <span className='text-sm text-gray-500'>Video</span>
          </div>

          <div className='flex items-center space-x-2 cursor-pointer'>
            <IconButton color='primary' onClick=
            {handleOpenCreatePostModal}>
              <ArticleIcon/>
            </IconButton>

            <span className='text-sm text-gray-500'>Article</span>
          </div>
        </div>
      </Card>

      <div className='mt-5 space-y-5'>

        {post.map((item) => <PostCard/>)}

        <PostCard/>
      </div>


    </div>
  )
}

export default MiddlePart
