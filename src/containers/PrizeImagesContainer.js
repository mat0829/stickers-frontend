import React, { Component } from 'react'
import {connect} from 'react-redux'

import PrizeImagesCollection from '../components/prizeImages/PrizeImagesCollection'
import fetchTaskImages from '../actions/taskImages/fetchTaskImages'

const labelStyle = {
  fontSize: '35px'
}

const taskPrizeBarContainerStyle = {
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
    prizezImages: state.prizeImageReducer.prizeImages,
    loading: state.prizeImageReducer.loading
  }
}

export default connect(mapStateToProps, { fetchTaskImages })(PrizeImagesContainer)