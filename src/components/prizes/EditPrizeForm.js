import React, { Component } from 'react'
import {connect} from 'react-redux'

import PrizeImagesContainer from '../../containers/PrizeImagesContainer'
import PrizeImageInfo from '../prizeImages/PrizeImageInfo'
import ErrorsContainer from '../../containers/ErrorsContainer'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

class EditPrizeForm extends Component {

  state = {
    id: '',
    prizeGiverId: ``,
    prizeReceiverId: '',
    name: '',
    image: '',
    cost: '5',
    purchased: '',
    showingPrizeImageCollection: false,
    showingPrizeImageInfo: true,
    currentErrors: null
  }

  componentDidMount() {
    const {
      id,
      prizeGiverId, 
      prizeReceiverId, 
      name,
      image,
      cost,
      purchased,
    } = this.props.prize

    this.setState({
      id,
      prizeGiverId, 
      prizeReceiverId, 
      name, 
      image, 
      cost, 
      purchased,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        this.setState({
          currentErrors: this.props.errors
        })
      }
    }
    if (prevProps.prizes !== this.props.prizes) {
      this.props.handleShowHideEditForm()
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handlePrizeClick = event => {
    event.preventDefault()
    const prizeImage = event.target.src
    this.setState({
      image: prizeImage
    })
    this.handleShowHidePrizeImage()
  }

  handleShowHidePrizeImage = () => {
    const {
      showingPrizeImageCollection, 
      showingPrizeImageInfo
    } = this.state
    
    this.setState({
      showingPrizeImageCollection: !showingPrizeImageCollection, 
      showingPrizeImageInfo: !showingPrizeImageInfo
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const history = this.props.history
    this.props.editPrize(this.state, history)
  }

  renderEditPrizeErrors = () => {
    const currentErrors = this.state.currentErrors
    if (currentErrors) {
      return (
        <ErrorsContainer
          errors={currentErrors}
        />
      )
    }
    else return null
  }

  render() {
    const {
      showingPrizeImageCollection, 
      showingPrizeImageInfo,
    } = this.state

    const children = JSON.parse(localStorage.getItem("childNames"))
    
    return (
      <div id="edit-prize-form-container">
        <h1>Edit Prize</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="edit-prize-child">
            Choose the Child the Prize is for:
          </label>

          <select
            id="edit-prize-child"
            name="prizeReceiverId"
            value={this.state.prizeReceiverId}
            onChange={this.handleChange}>
              <option>Select Name Here</option>
              {children.map(child =>
                <option key={child.id} value={child.id}>{child.name}</option>
              )}
          </select><br/><br/>

          <label htmlFor="edit-prize-name">
            Prize Name:
          </label>

          <input
            id="edit-prize-name"
            name="name" 
            placeholder="Name Your Prize Here"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="edit-prize-image">
            Prize Image URL:
          </label>

          <input
            id="edit-prize-image"
            name="image" 
            placeholder="Manually Add Image Url"
            value={this.state.image}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          {showingPrizeImageCollection
            ?  <PrizeImagesContainer 
                 refProp={this.props.refProp}
                 scrollToMyRef={this.props.scrollToMyRef} 
                 handlePrizeClick={this.handlePrizeClick}
               />
            :  null
          }

          {showingPrizeImageInfo
            ?  <>
                <PrizeImageInfo
                  imgURL={this.state.image}
                  handleShowHidePrizeImage={this.handleShowHidePrizeImage}
                /><br/>
              </>
            :  null
          }

          {this.renderEditPrizeErrors()}

          <label htmlFor="edit-prize-cost">
            Choose Prize Cost:
          </label>

          <select 
            id="edit-prize-cost" 
            name="cost" 
            onChange={this.handleChange}>
              <option value="5">5 Sticker Points</option>
              <option value="10">10 Sticker Points</option>
              <option value="20">20 Sticker Points</option>
              <option value="25">25 Sticker Points</option>
              <option value="50">50 Sticker Points</option>
              <option value="75">75 Sticker Points</option>
              <option value="100">100 Sticker Points</option>
              <option value="250">250 Sticker Points</option>
              <option value="500">500 Sticker Points</option>
              <option value="750">750 Sticker Points</option>
              <option value="1000">1000 Sticker Points</option>
          </select><br/><br/>

          <input
            style={submitBtnStyle}
            type="submit" 
            value="Update Prize">
          </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.prizeReducer.errors
  }
}

export default connect(mapStateToProps)(EditPrizeForm)