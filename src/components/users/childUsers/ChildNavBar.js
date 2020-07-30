import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Switch, NavLink, Route} from 'react-router-dom'

import ChildUserProfile from './ChildUserProfile'

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
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <NavLink to="/child-user-profile">
          <button style={profileBtnStyle}>User Profile</button>
        </NavLink>
  
        <NavLink to="/child-tasks-page">
          <button style={tasksBtnStyle}>Tasks Page</button>
        </NavLink>
              
        <NavLink to="/stickers-collection">
          <button style={stickersBtnStyle}>Stickers Collection</button>
        </NavLink>
  
        <NavLink to="/child-prizes-page">
          <button style={prizesBtnStyle}>Prizes Page</button>
        </NavLink>
  
        <NavLink to="/prizes-collection">
          <button style={prizesCollectionBtnStyle}>Prizes Collection</button>
        </NavLink>
  
        <NavLink to="/logout">
          <button style={logoutBtnStyle} onClick={this.handleClick}>Logout</button>
        </NavLink>
        <Switch>
          <Route exact path='/child-user-profile' component={ChildUserProfile}></Route>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export const logoutUser = () => ({
  type: 'LOGOUT_CHILD_USER'
})

export default connect(null, mapDispatchToProps)(ChildNavBar)