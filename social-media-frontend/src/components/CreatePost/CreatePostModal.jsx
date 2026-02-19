import { Avatar, Box, IconButton, Modal, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '.6rem',
  outline:"none"
};

const CreatePostModal = ({handleClose,open}) => {
    const formik=useFormik();

    const [selectedImage, setSelectedImage] = useState();
    const [selectedVideo, setSelectedVideo] = useState();
    
    const handleSelectImage=(e)=>{
        setSelectedImage
    }

    const handleSelectVideo=(e)=>{
        const file=e.target.files[0];
        console.log("Selected Video 👉",file);
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>

        <Box sx={style}>

            <form onSubmit={formik.handleSubmit}></form>

            <div>
                <div className='flex space-x-4 items-center'>
                    <Avatar/>
                    <div>
                        <p className='font-bold text-lg'> Code with zosh</p>
                        <p className='text-sm'>@CodewithZosh</p>
                    </div>    
                 </div>
                 <textarea placeholder='write caption...' name='caption' id='' onChange={formik.handleChange} value={formik.values.caption} rows='4'></textarea>
                 
                 <div className='flex space-x-5 items-center mt-5'>
                    <div>
                        <input type="file" accept='image/*'
                        onChange={handleSelectImage} 
                         style={{display:"none"}} id='image-input'/> 

                        <label htmlFor='image-input'> 
                            <IconButton color='primary'>
                                <ImageIcon color='primary'/>
                            </IconButton>
                        </label>

                        <span> Image </span>
                    </div>
                 </div>
            </div>

        </Box>
      </Modal>
    </div>
  )
}

export default CreatePostModal
