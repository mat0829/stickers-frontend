import React, { Component } from 'react'
import {connect} from 'react-redux'

import PrizeImagesCollection from '../components/prizeImages/PrizeImagesCollection'
import fetchPrizeImages from '../actions/prizeImages/fetchPrizeImages'

const labelStyle = {
  fontSize: '35px'
}

const prizeImageBarContainerStyle = {
  height: 'auto',
  width: 'auto',
  textAlign: 'center',
  padding: '5px'
}

class PrizeImagesContainer extends Component {

  componentDidMount() {
    this.props.fetchPrizeImages()
    this.props.scrollToMyRef()
  }

  render() {
    return (
      <div
        ref={this.props.refProp}
        id='adult-prize-image-bar-container' 
        style={prizeImageBarContainerStyle}>
          
          <label 
            htmlFor="adult-prize-image-bar" 
            style={labelStyle}>
              Click to Select a Prize Image:
          </label>

          <PrizeImagesCollection 
            prizeImages={this.props.prizeImages} 
            handlePrizeClick={this.props.handlePrizeClick}
            loading={this.props.loading}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    prizeImages: state.prizeImageReducer.prizeImages,
    loading: state.prizeImageReducer.loading
  }
}

export default connect(mapStateToProps, { fetchPrizeImages })(PrizeImagesContainer)