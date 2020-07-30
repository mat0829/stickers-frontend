import React from 'react'

const avatarStyle = {
  maxWidth: '15vw',
  maxHeight: '15vw'
}

const AdultUserAvatar = (props) => {
  return (
    <div>
      <h3>(Sample of your Avatar)</h3>
      <img
       style={avatarStyle}
       src={props.imgURL} 
       alt='adult-avatar'>
      </img>
      <h3>(Generate as many times as you wish!)</h3>
    </div>
  )
}

export default AdultUserAvatar