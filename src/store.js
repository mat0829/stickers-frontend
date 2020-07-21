import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adultUsersReducer from './reducers/users/adultUsersReducer'

const rootReducer = combineReducers({
  adultUsersReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export default store