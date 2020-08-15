import React from 'react'

import ChildEditUserForm from './ChildEditUserForm'
import ChildUserAvatar from './ChildUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

const ChildUserInfo = (props) => {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  const {showingUserProfile, showingEditForm} = props.profileState
  return (
    <div>
        {showingUserProfile
          ? <div id="child-user-info"> 
              <h1>{props.currentUser.name}</h1>
              <ChildUserAvatar imgURL={props.currentUser.avatar}/>

              <button 
                onClick={props.handleClick}
                style={btnStyle}>
                  Edit User {props.currentUser.name}
              </button>

              <button 
                onClick={() => props.childUserDelete(props.currentUser.id)}
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
        ? <div>
            <ChildEditUserForm
              renderUpdateErrors={props.renderUpdateErrors}
              handleClick={props.handleClick}
            />
          </div>
        : null
      }
    </div>
  )
}

export default ChildUserInfo