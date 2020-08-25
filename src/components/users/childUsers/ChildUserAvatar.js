import React from 'react'

const avatarStyle = {
  maxWidth: '20vw',
  maxHeight: '20vw'
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