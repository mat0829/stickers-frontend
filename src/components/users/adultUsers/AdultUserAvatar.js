import React from 'react'

const avatarStyle = {
  maxWidth: '25vw',
  maxHeight: '25vw'
}

const AdultUserAvatar = (props) => {
  return (
    <div>
      <img
        style={avatarStyle}
        src={props.imgURL} 
        alt='adult-avatar'>
      </img>
    </div>
  )
}

export default AdultUserAvatar