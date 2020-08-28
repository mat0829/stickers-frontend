import React from 'react'

const avatarStyle = {
  maxWidth: '15vw',
  maxHeight: '15vw'
}

const ChildUserAvatar = (props) => (
  <div>
    <img
      style={avatarStyle}
      src={props.imgURL}
      alt='child-avatar'>
    </img>
  </div>
)

export default ChildUserAvatar