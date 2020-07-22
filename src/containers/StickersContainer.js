import React, { Component } from 'react'
import Stickers from '../components/stickers/Stickers'
import {connect} from 'react-redux'

class StickersContainer extends Component {
  render() {
    return (
      <div>
        <Stickers />
      </div>
    )
  }
}

export default connect()(StickersContainer)