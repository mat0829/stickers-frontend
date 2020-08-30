import React from 'react'

const imgStyle = {
  maxWidth: '400px',
  maxHeight: '200px'
}

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const PrizeImageInfo = (props) => (
  <div id="adult-prize-image-info">
    <img
      style={imgStyle}
      src={props.imgURL}
      alt='prizeImage'>
    </img><br />

    <button
      type="button"
      style={btnStyle}
      onClick={props.handleShowHidePrizeImage}>
        Select a Different Prize Image
    </button>
  </div>
)

export default PrizeImageInfo