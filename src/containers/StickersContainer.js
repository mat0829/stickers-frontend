import React, { Component } from 'react'
import {connect} from 'react-redux'

import StickersList from '../components/stickers/StickersList'
import fetchStickers from '../actions/stickers/fetchStickers'

const stickerBarContainerStyle = {
  height: '75vh',
  textAlign: 'center'
}

class StickersContainer extends Component {

  componentDidMount() {
    this.props.fetchStickers()
  }

  render() {
    return (
      <div id='adult-sticker-bar-container' style={stickerBarContainerStyle}>
        <StickersList stickers={this.props.stickers} loading={this.props.loading}/>
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

const mapDispatchToProps = dispatch => ({
  fetchStickers: () => dispatch(fetchStickers())
})

export default connect(mapStateToProps, mapDispatchToProps)(StickersContainer)