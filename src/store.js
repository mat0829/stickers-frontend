import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adultUserReducer from './reducers/users/adultUserReducer'
import childUserReducer from './reducers/users/childUserReducer'
import stickerReducer from './reducers/stickerReducer'

const rootReducer = combineReducers({
  adultUserReducer,
  childUserReducer,
  stickerReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))

export default store