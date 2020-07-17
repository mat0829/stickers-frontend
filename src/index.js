import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/manageUsersAndTasks'
import { composeWithDevTools } from 'redux-devtools-extension'

import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));