import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import adultUserLogout from '../../../actions/users/adultUsers/adultUserLogout'

const profileBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, orange, purple)'
}

const tasksBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, purple, blue)'
}

const addTaskBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const prizesBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, red, rgb(250, 120, 142)'
}

const addPrizeBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, rgb(250, 120, 142), gold)'
}

const logoutBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, gold, green)'
}

class AdultNavBar extends Component {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.adultUserLogout()
  }

  render() {
    return (
      <div>
        <NavLink to="/adult/profile">
          <button style={profileBtnStyle}>
            User Profile
          </button>
        </NavLink>
  
        <NavLink to="/tasks">
          <button style={tasksBtnStyle}>
            Tasks Page
          </button>
        </NavLink>
              
        <NavLink to="/tasks/new">
          <button style={addTaskBtnStyle}>
            Create a New Task
          </button>
        </NavLink>
  
        <NavLink to="/prizes">
          <button style={prizesBtnStyle}>
            Prizes Page
          </button>
        </NavLink>
  
        <NavLink to="/prizes/new">
          <button style={addPrizeBtnStyle}>
            Add a New Prize
          </button>
        </NavLink>
  
        <NavLink to="/">
          <button 
            style={logoutBtnStyle} 
            onClick={this.handleClick}>
              Logout
          </button>
        </NavLink>
      </div>
    )
  }
}

export default connect(null, { adultUserLogout })(AdultNavBar)