import React from 'react'

const prizeImageBarStyle = {
  background: 'black',
  display: 'block',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const spanStyle = {
  padding: '1vw',
  display: 'inline-block'
}

const prizeImageStyle = {
  width:  '300px',
  height: '150px'
}

const PrizeImagesCollection = (props) => {
  const renderPrizeImages = () => props.prizeImages.map(prizeImage => 
    <span
      key={prizeImage.id}
      style={spanStyle}>
        <img
          src={prizeImage.imageUrl}
          alt={`prizeImage ${prizeImage.id}`}
          onClick={props.handlePrizeClick}
          style={prizeImageStyle}>
        </img>
    </span>
  )

  return (
    <div 
      id='adult-prize-image-bar' 
      style={prizeImageBarStyle}>
        {props.loading 
          ?  <h1>"Loading..."</h1> 
          :  renderPrizeImages()
        }
    </div>
  )
}

export default PrizeImagesCollection