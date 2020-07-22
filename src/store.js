import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adultUserReducer from './reducers/users/adultUserReducer'

const rootReducer = combineReducers({
  adultUserReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export default store