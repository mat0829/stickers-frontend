import React, { Component } from 'react'

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

class StickersList extends Component {

  renderStickers = () => {
    return this.props.stickers.map(sticker => 
      <span style={spanStyle}>
        <img key ={sticker.id} src={sticker.image} alt={`sticker ${sticker.id}`} style={stickerImageStyle}></img>
      </span>)
  }

  render() {
    return (
      <div id='adult-sticker-bar' style={stickerBarStyle}>
        {this.props.loading ?  <h1>"Loading..."</h1> : this.renderStickers()}
      </div>
    )
  }
}

export default StickersList