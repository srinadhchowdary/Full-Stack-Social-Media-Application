import axios from 'axios'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './auth.actionType'

/* ---------------- LOGIN ---------------- */
export const loginUserAction = ({ data }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })

    const response = await axios.post(
      'http://localhost:8080/auth/signin',
      data
    )

    console.log('LOGIN RESPONSE 👉', response.data)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.token,
    })
  } catch (error) {
    console.error('LOGIN ERROR 👉', error.response?.data)

    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data || error.message,
    })
  }
}

/* ---------------- REGISTER ---------------- */
export const registerUserAction = ({ data }) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST })

    // ⚠️ SEND EXACTLY WHAT BACKEND EXPECTS
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      gender: data.gender, // string (as you said)
    }

    console.log('SIGNUP PAYLOAD 👉', payload)

    const response = await axios.post(
      'http://localhost:8080/auth/signup',
      payload
    )

    console.log('SIGNUP RESPONSE 👉', response.data)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data.token, // backend sends token
    })
  } catch (error) {
    console.error('SIGNUP STATUS 👉', error.response?.status)
    console.error('SIGNUP ERROR BODY 👉', error.response?.data)

    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response?.data || error.message,
    })
  }
}
