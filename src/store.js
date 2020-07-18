import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/users/usersReducer'

const rootReducer = combineReducers({
  usersReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export default store