import React from 'react'

const stickerBarStyle = {
  background: 'black',
  display: 'block',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const spanStyle = {
  padding: '1vw',
  display: 'inline-block'
}

const stickerImageStyle = {
  width:  '75px',
  height: '75px'
}

const StickersCollection = (props) => {

  const renderStickers = () => {
    return props.stickers.map(sticker => 
      <span 
        key ={sticker.id} 
        style={spanStyle}>
          <img 
            src={sticker.image} 
            alt={`sticker ${sticker.id}`}
            onClick={props.handleStickerClick}
            style={stickerImageStyle}>
          </img>
      </span>)
  }

  return (
    <div 
      id='adult-sticker-bar' 
      style={stickerBarStyle}>
        {props.loading 
          ?  <h1>"Loading..."</h1> 
          :  renderStickers()
        }
    </div>
  )
}

export default StickersCollection