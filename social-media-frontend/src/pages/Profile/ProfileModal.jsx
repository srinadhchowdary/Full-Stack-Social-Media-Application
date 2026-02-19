import React from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Avatar,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../Redux/Auth/auth.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750, // ✅ increased size
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  outline: "none",
  overflow: "hidden",
};

const ProfileModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      bio: user?.bio || "",
    },
    onSubmit: (values) => {
      console.log("UPDATED PROFILE DATA 👉", values);
      dispatch(updateProfileAction({ reqData: values }));
      handleClose();
    },
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>

        {/* COVER + AVATAR */}
        <div className="relative">
          <div className="h-36 w-full">
            <img
              src="https://i.pinimg.com/1200x/2a/53/a9/2a53a919196eadda665db1ad0e075e50.jpg"
              alt="cover"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-8 top-24">
            <Avatar
              sx={{
                width: 100,
                height: 100,
                border: "4px solid white",
              }}
              src="https://i.pinimg.com/736x/b2/1a/99/b21a99c3174fbf2d96d2f3911085b693.jpg"
            />
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={formik.handleSubmit}>
          <div className="px-8 pt-20 pb-6 space-y-4">

            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              label="Bio"
              name="bio"
              multiline
              rows={3}
              value={formik.values.bio}
              onChange={formik.handleChange}
            />

            {/* ACTION BUTTONS */}
            <div className="flex justify-end gap-4 pt-6">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </div>
          </div>
        </form>

      </Box>
    </Modal>
  );
};

export default ProfileModal;