import React from 'react'
import {NavLink} from 'react-router-dom'

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

const ChildNavBar = (props) => {

  const handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    props.childUserLogout()
  }

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
        <button style={logoutBtnStyle} onClick={handleClick}>
          Logout
        </button>
      </NavLink>
    </div>
  )
}

export default ChildNavBar