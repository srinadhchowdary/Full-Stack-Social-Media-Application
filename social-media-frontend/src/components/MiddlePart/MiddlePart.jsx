import { Avatar, Card, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";

const story = [1, 2, 3, 4, 5];
const post = [1, 2, 3, 4, 5];

const MiddlePart = () => {


  const [openCreatePostModal, setOpenCreatePostModal] = React.useState(false);

  const handleCloseCreatePostModal=()=> setOpenCreatePostModal(false);
  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
    console.log("Open Create Post Modal");
  };

  return (
    <div className="px-20">

      {/* Stories */}
      <section className="py-5 flex items-center p-5 rounded-b-md">

        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto">
          {story.map((item, index) => (
            <StoryCircle key={index} />
          ))}
        </div>

      </section>

      {/* Create Post */}
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
            onClick={handleOpenCreatePostModal}
            readOnly
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border border-[#3b4054]"
            type="text"
          />
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center space-x-2 cursor-pointer">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>
            <span className="text-sm text-gray-500">Media</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>
            <span className="text-sm text-gray-500">Video</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span className="text-sm text-gray-500">Article</span>
          </div>
        </div>
      </Card>

      {/* Posts */}
      <div className="mt-5 space-y-5">
        {post.map((item, index) => (
          <PostCard key={index} />
        ))}
      </div>

      <div>
        <CreatePostModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}  />
      </div>

    </div>
  );
};

export default MiddlePart;
