import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Switch, NavLink, Route} from 'react-router-dom'

import AdultUserProfile from './AdultUserProfile'

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
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <NavLink to="/adult-user-profile">
          <button style={profileBtnStyle}>User Profile</button>
        </NavLink>
  
        <NavLink to="/adult-tasks-page">
          <button style={tasksBtnStyle}>Tasks Page</button>
        </NavLink>
              
        <NavLink to="/add-new-task">
          <button style={addTaskBtnStyle}>Create a New Task</button>
        </NavLink>
  
        <NavLink to="/adult-prizes-page">
          <button style={prizesBtnStyle}>Prizes Page</button>
        </NavLink>
  
        <NavLink to="/add-new-prize">
          <button style={addPrizeBtnStyle}>Add a New Prize</button>
        </NavLink>
  
        <NavLink to="/logout">
          <button
          onClick={this.handleClick}
          style={logoutBtnStyle}>Logout</button>
        </NavLink>
        <Switch>
          <Route exact path='/adult-user-profile' component={AdultUserProfile}></Route>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export default connect(null, mapDispatchToProps)(AdultNavBar)