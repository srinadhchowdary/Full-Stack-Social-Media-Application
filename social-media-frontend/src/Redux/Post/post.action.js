import { CREATE_POST_FAILURE, CREATE_POST_REQUEST, CREATE_POST_SUCCESS } from "./post.actiontype"


const createPostAction = (postData) => async(dispatch) =>{
    dispatch({type: CREATE_POST_REQUEST})
    try {
        // Make API call to create post

        const {data} = await api.post('/api/posts', postData)
        dispatch({type: CREATE_POST_SUCCESS, payload: data})
        console.log('Post created successfully', data)
    
    } catch (error) {
        dispatch({type: CREATE_POST_FAILURE, payload: error.message})
    }   
}