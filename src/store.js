import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/users/usersReducer'

const composeEnhancers = composeWithDevTools() || compose

const rootReducer = combineReducers({
  usersReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
))

export default store