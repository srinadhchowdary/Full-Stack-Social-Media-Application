import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";
import ProfileModal from "./ProfileModal";

const tabs = [
  { label: "Posts", value: "post" },
  { label: "Reels", value: "reels" },
  { label: "Saved", value: "saved" },
  { label: "Reposts", value: "repost" },
];

const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1];
const saved = [1, 1, 1, 1, 1];
const repost = [1, 1, 1, 1, 1];

const Profile = () => {
  const { id } = useParams();

  // 🔹 get logged-in user from redux
  const { user: authUser } = useSelector((store) => store.auth);

  // 🔹 check if viewing own profile
  const isOwnProfile = authUser?.id === Number(id);

  const [value, setValue] = React.useState("post");
  const [open, setOpen] = React.useState(false);
  console.log("Modal open:", open); // ✅ PUT IT HERE


  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="my-10 w-[70%] mx-auto">

      {/* PROFILE HEADER */}
      <div className="relative rounded-md border border-gray-200 bg-white">

        {/* COVER IMAGE */}
        <div className="h-75 w-full overflow-hidden rounded-t-md">
          <img
            src="https://i.pinimg.com/1200x/2a/53/a9/2a53a919196eadda665db1ad0e075e50.jpg"
            alt="cover"
            className="h-full w-full object-cover"
          />
        </div>

        {/* AVATAR */}
        <div className="absolute left-5 bottom-25 -translate-y-1/2 z-20">
          <Avatar
            sx={{
              width: "10rem",
              height: "10rem",
              border: "4px solid white",
            }}
            src="https://i.pinimg.com/736x/b2/1a/99/b21a99c3174fbf2d96d2f3911085b693.jpg"
          />
        </div>

        {/* USER DETAILS */}
        <div className="pt-28 px-6 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-bold text-xl">
                {authUser?.firstName} {authUser?.lastName}
              </h1>

              <p className="text-gray-600">
                @{authUser?.firstName?.toLowerCase()}_
                {authUser?.lastName?.toLowerCase()}
              </p>
            </div>

            {isOwnProfile ? (
              <Button
                variant="outlined"
                sx={{ borderRadius: "20px" }}
                onClick={handleOpen}   // ✅ THIS WAS MISSING
              >
                Edit Profile
              </Button>
            ) : (
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                Follow
              </Button>
            )}

          </div>

          {/* STATS */}
          <div className="flex gap-6 py-4 text-sm">
            <span>
              <strong>41</strong> posts
            </span>
            <span>
              <strong>1.2M</strong> followers
            </span>
            <span>
              <strong>100</strong> following
            </span>
          </div>

          {/* BIO */}
          <p className="text-gray-700 max-w-xl">
            {authUser?.bio || "No bio added yet"}
          </p>
        </div>
      </div>

      {/* TABS */}
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
          mt: 4,
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          {tabs.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {/* TAB CONTENT */}
      <div className="flex justify-center">

        {value === "post" && (
          <div className="space-y-5 w-full max-w-3xl my-10">
            {posts.map((_, index) => (
              <PostCard key={index} />
            ))}
          </div>
        )}

        {value === "reels" && (
          <div className="flex flex-col gap-8 w-full max-w-3xl my-20 ml-8">
            {reels.map((_, index) => (
              <UserReelCard key={index} />
            ))}
          </div>
        )}

        {value === "saved" && (
          <div className="space-y-5 w-full max-w-3xl my-10">
            {saved.map((_, index) => (
              <PostCard key={index} />
            ))}
          </div>
        )}

        {value === "repost" && (
          <div className="space-y-5 w-full max-w-3xl my-10">
            {repost.map((_, index) => (
              <PostCard key={index} />
            ))}
          </div>
        )}

      </div>

      
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
      
    </div>
    
  );
};

export default Profile;
