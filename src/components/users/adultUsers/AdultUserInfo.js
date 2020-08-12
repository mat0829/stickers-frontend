import React from 'react'

import AdultEditUserForm from './AdultEditUserForm'
import AdultUserAvatar from './AdultUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

const AdultUserInfo = (props) => {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const {showingUserProfile, showingEditForm} = props.profileState
  return (
    <div>
        {showingUserProfile
          ? <div id="adult-user-info"> 
              <h1>{props.currentUser.name}</h1>
              <AdultUserAvatar imgURL={props.currentUser.avatar}/>

              <button 
                onClick={props.handleClick}
                style={btnStyle}>
                  Edit User {props.currentUser.name}
              </button>

              <button 
                onClick={() => props.adultUserDelete(props.currentUser.id)}
                style={btnStyle}> 
                  Delete User {props.currentUser.name}
              </button><br/><br/>

              <button 
                style={btnStyle} 
                onClick={scrollToTop}>
                  Top of Page 
              </button>
            </div>
          : null
        }
    
      {showingEditForm
        ? <div><AdultEditUserForm handleClick={props.handleClick}/></div>
        : null
      }
    </div>
  )
}

export default AdultUserInfo