import React, { Component } from 'react'
import {connect} from 'react-redux'

import Stickers from '../components/stickers/Stickers'
import fetchStickers from '../actions/stickers/fetchStickers'

class StickersContainer extends Component {

  render() {
    return (
      <div>
        <Stickers />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stickers: state.stickers
  }
}

export default connect(mapStateToProps, {fetchStickers})(StickersContainer)