import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import childUserLogout from '../../../actions/users/childUsers/childUserLogout'

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
        <NavLink to="/child/profile">
          <button style={profileBtnStyle}>
            User Profile
          </button>
        </NavLink>
  
        <NavLink to="/tasks">
          <button style={tasksBtnStyle}>
            Tasks Page
          </button>
        </NavLink>
              
        <NavLink to="/stickers-collection">
          <button style={stickersBtnStyle}>
            Stickers Collection
          </button>
        </NavLink>
  
        <NavLink to="/child-prizes">
          <button style={prizesBtnStyle}>
            Prizes Page
          </button>
        </NavLink>
  
        <NavLink to="/prizes-collection">
          <button style={prizesCollectionBtnStyle}>
            Prizes Collection
          </button>
        </NavLink>
  
        <NavLink to="/">
          <button style={logoutBtnStyle} onClick={this.handleClick}>
            Logout
          </button>
        </NavLink>
      </div>
    )
  }
}

export default connect(null, { childUserLogout })(ChildNavBar)