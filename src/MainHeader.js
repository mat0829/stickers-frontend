import React from 'react';

const HeaderStyle = {
  padding: '10px'
}

const HeaderImgStyle = {
  backgroundColor: '#302244',
  border: '7px solid transparent',
  borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
  borderImageSlice: 1,
  margin: '20px auto',
  maxWidth: '30vw',
  maxHeight: '30vw'
}

const MainHeader = () => {
  return (
    <div style={HeaderStyle} id="stickers-header">
      <img style={HeaderImgStyle} src="https://i.imgur.com/xDlD33Q.jpg" alt="stickers-header"/>
    </div>
  )
}

export default MainHeader