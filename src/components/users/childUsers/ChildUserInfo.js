import React from 'react'

import ChildUserAvatar from './ChildUserAvatar'
import { NavLink } from 'react-router-dom'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

const ChildUserInfo = (props) => {
  const childUser = props.childUser

  return (
    <div id="child-user-info">
      <h1>{childUser.name}</h1>
      <ChildUserAvatar imgURL={childUser.avatar}/>
      <h2>Sticker Points: {childUser.points}</h2>

      <NavLink to={`/child/profile/edit`}>
        <button 
          style={btnStyle}>
            Edit User {childUser.name}
        </button>
      </NavLink>

      <button 
        onClick={() => props.childUserDelete(childUser.id)}
        style={btnStyle}> 
          Delete User {childUser.name}
      </button><br/><br/>

      <button 
        style={btnStyle} 
        onClick={() => props.scrollToTop()}>
          Top of Page 
      </button>
    </div>
  )
}

export default ChildUserInfo