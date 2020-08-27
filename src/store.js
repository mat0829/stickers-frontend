import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import adultUserReducer from './reducers/users/adultUserReducer'
import childUserReducer from './reducers/users/childUserReducer'
import taskReducer from './reducers/taskReducer'
import taskImageReducer from './reducers/taskImageReducer'
import stickerReducer from './reducers/stickerReducer'
import prizeImageReducer from './reducers/prizeImageReducer'

const rootReducer = combineReducers({
  adultUserReducer,
  childUserReducer,
  taskReducer,
  taskImageReducer,
  stickerReducer,
  prizeImageReducer
})

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

export default store