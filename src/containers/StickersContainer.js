import React, { Component } from 'react'
import {connect} from 'react-redux'

import Stickers from '../components/stickers/Stickers'
import fetchStickers from '../actions/stickers/fetchStickers'

const labelStyle = {
  fontSize: '35px'
}

const stickerBarContainerStyle = {
  height: 'auto',
  textAlign: 'center'
}

class StickersContainer extends Component {

  componentDidMount() {
    this.props.fetchStickers()
    this.props.scrollToMyRef()
  }

  render() {
    return (
      <div
        ref={this.props.refProp}
        id='adult-sticker-bar-container' 
        style={stickerBarContainerStyle}>

          <label 
            htmlFor="adult-sticker-bar" 
            style={labelStyle}>
              Click to Select a Sticker:
          </label>

          <Stickers
            stickers={this.props.stickers}
            handleStickerClick={this.props.handleStickerClick}
            loading={this.props.loading}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stickers: state.stickerReducer.stickers,
    loading: state.stickerReducer.loading
  }
}

export default connect(mapStateToProps, { fetchStickers })(StickersContainer)