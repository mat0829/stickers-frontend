import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Switch, NavLink, Route} from 'react-router-dom'

import childUserLogout from '../../../actions/users/childUsers/childUserLogout'
import ChildUserProfile from './ChildUserProfile'
import TasksContainer from '../../../containers/TasksContainer'

const profileBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, orange, purple)'
}

const tasksBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, purple, blue)'
}

const stickersBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const prizesBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, red, rgb(250, 120, 142)'
}

const prizesCollectionBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, rgb(250, 120, 142), gold)'
}

const logoutBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, gold, green)'
}

class ChildNavBar extends Component {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.childUserLogout()
  }

  render() {
    return (
      <div>
        <NavLink to="/kids-homepage">
          <button style={profileBtnStyle}>
            User Profile
          </button>
        </NavLink>
  
        <NavLink to="/child-tasks-page">
          <button style={tasksBtnStyle}>
            Tasks Page
          </button>
        </NavLink>
              
        <NavLink to="/stickers-collection">
          <button style={stickersBtnStyle}>
            Stickers Collection
          </button>
        </NavLink>
  
        <NavLink to="/child-prizes-page">
          <button style={prizesBtnStyle}>
            Prizes Page
          </button>
        </NavLink>
  
        <NavLink to="/prizes-collection">
          <button style={prizesCollectionBtnStyle}>
            Prizes Collection
          </button>
        </NavLink>
  
        <NavLink to="/logout">
          <button style={logoutBtnStyle} onClick={this.handleClick}>
            Logout
          </button>
        </NavLink>

        <Switch>
          <Route 
            exact path='/kids-homepage' 
            component={ChildUserProfile}>
          </Route>

          <Route 
            exact path='/child-tasks-page' 
            component={TasksContainer}>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default connect(null, { childUserLogout })(ChildNavBar)