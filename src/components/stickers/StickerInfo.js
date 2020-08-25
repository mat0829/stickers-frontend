import React from 'react'

const imgStyle = {
  maxWidth: '250px',
  maxHeight: '125px'
}

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const StickerInfo = (props) => (
  <div id="adult-sticker-info">
    <img
      style={imgStyle}
      src={props.imgURL}
      alt='sticker'>
    </img><br />

    <button
      type="button"
      style={btnStyle}
      onClick={props.handleShowHideSticker}>
      Select a Different Sticker
    </button>
  </div>
)

export default StickerInfo