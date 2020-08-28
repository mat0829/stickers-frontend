import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchPrizes from '../actions/prizes/fetchPrizes'
import sortPrizes from '../actions/prizes/sortPrizes'
import editPrize from '../actions/prizes/editPrize'
import Prizes from '../components/prizes/Prizes'

const labelStyle = {
  fontSize: '35px'
}

const prizeBarContainerStyle = {
  paddingTop: '20px'
}

class PrizesContainer extends Component {

  componentDidMount() {
    this.props.fetchPrizes()
  }

  handlePrizeSorting = (event) => {
    this.setState({
      showingPrizeInfo: false
    })
    if (event.target.value === 'Show all Prizes') {
      this.props.fetchPrizes()
    } else {
      let childName = event.target.value
      this.props.sortPrizes(childName)
    }
  }

  render() {
    const adultLoggedIn = this.props.adultLoggedIn
    if (adultLoggedIn) {
      const children = JSON.parse(localStorage.getItem("childNames"))

      if (children !== null) {
        return (
          <div 
            id='adult-prizes-container' 
            style={prizeBarContainerStyle}>
              
              <label 
                htmlFor="prize-bar" 
                style={labelStyle}>
                  Click on a Prize to see more details:
              </label>
    
              <Prizes
                prizes={this.props.prizes}
                loading={this.props.loading}
                message={this.props.message}
              />
              
              <label htmlFor="prize-child">
                Sort by a Child:
              </label>
    
            <select
              id="prize-child"
              onChange={this.handlePrizeSorting}>
                <option>Show all Prizes</option>
                {children.map(child =>
                  <option key={child.id}>{child.name}</option>
                )}
            </select>
          </div>
        )
      }
      else return <h2>Help your Child(ren) make a User(s) to start making Prizes.</h2>
    }
    else {
      return (
        <div 
          id='child-prizes-container' 
          style={prizeBarContainerStyle}>
            
            <label 
              htmlFor="prize-bar" 
              style={labelStyle}>
                Click on a Prize to see more details:
            </label>
  
            <Prizes
              prizes={this.props.prizes}
              loading={this.props.loading}
              message={this.props.message}
            />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    prizes: state.prizeReducer.prizes,
    loading: state.prizeReducer.loading,
    message: state.prizeReducer.message,
    errors: state.prizeReducer.errors
  }
}

export default connect(mapStateToProps, {
  fetchPrizes,
  sortPrizes,
  editPrize
})(PrizesContainer)