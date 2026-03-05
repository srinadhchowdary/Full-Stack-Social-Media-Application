import {
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actiontype"

const initialState = {
  post: null,
  loading: false,
  error: null,
  posts: [],
  like: null
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {

    /* ---------------- REQUEST ---------------- */
    case CREATE_POST_REQUEST:
    case GET_ALL_POST_REQUEST:
    case LIKE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    /* ---------------- CREATE POST SUCCESS ---------------- */
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        posts: [action.payload, ...state.posts],
        loading: false
      }

    /* ---------------- GET ALL POSTS SUCCESS ---------------- */
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null
      }

    /* ---------------- LIKE SUCCESS ---------------- */
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        like: action.payload,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false,
        error: null
      }

    /* ---------------- CREATE COMMENT SUCCESS ---------------- */
      case CREATE_COMMENT_SUCCESS:
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post.id === Number(action.payload.postId)) {
              return {
                ...post,
                comments: [...(post.comments || []), action.payload]
              }
            }
            return post
          })
        }

    /* ---------------- FAILURE ---------------- */
    case CREATE_POST_FAILURE:
    case GET_ALL_POST_FAILURE:
    case LIKE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default postReducer