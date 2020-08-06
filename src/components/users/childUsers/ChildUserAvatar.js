import React from 'react'

const avatarStyle = {
  maxWidth: '25vw',
  maxHeight: '25vw'
}

const ChildUserAvatar = (props) => {
  return (
    <div>
      <img
        style={avatarStyle}
        src={props.imgURL} 
        alt='child-avatar'>
      </img>
    </div>
  )
}

export default ChildUserAvatar