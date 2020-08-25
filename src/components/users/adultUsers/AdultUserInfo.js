import React from 'react'

import AdultUserAvatar from './AdultUserAvatar'
import { NavLink } from 'react-router-dom'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

const AdultUserInfo = (props) => {
  const adultUser = props.adultUser
  
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div id="adult-user-info">
      <h1>{adultUser.name}</h1>
      <AdultUserAvatar imgURL={adultUser.avatar}/>

      <NavLink to={`/adult/profile/edit`}>
        <button 
          style={btnStyle}>
            Edit User {adultUser.name}
        </button>
      </NavLink>

      <button 
        onClick={() => props.adultUserDelete(adultUser.id)}
        style={btnStyle}> 
          Delete User {adultUser.name}
      </button><br/><br/>

      <button 
        style={btnStyle} 
        onClick={scrollToTop}>
          Top of Page 
      </button>
    </div>
  )
}

export default AdultUserInfo