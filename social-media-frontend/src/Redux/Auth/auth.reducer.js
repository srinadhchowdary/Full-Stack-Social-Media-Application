import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT
} from './auth.actionType'

const initialState = {
  jwt: null,
  error: null,
  loading: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    /* ---------- LOGIN ---------- */
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload,
        loading: false,
        error: null,
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        jwt: null,
        loading: false,
        error: action.payload,
      }

    /* ---------- REGISTER ---------- */
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      }

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    /* ---------- LOGOUT ---------- */
    case LOGOUT:
      return initialState

    default:
      return state
  }
}

