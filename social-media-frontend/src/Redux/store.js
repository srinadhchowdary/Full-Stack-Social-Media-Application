import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './Auth/auth.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
