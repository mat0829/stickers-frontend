import React, { Component } from 'react'
import {connect} from 'react-redux'

import addNewPrize from '../../actions/prizes/addNewPrize'
import PrizeImagesContainer from '../../containers/PrizeImagesContainer'
import PrizeImageInfo from '../prizeImages/PrizeImageInfo'
import ErrorsContainer from '../../containers/ErrorsContainer'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

class NewPrizeForm extends Component {

  state = {
    prizeGiverId: `${this.props.currentUser.id}`,
    prizeReceiverId: '',
    name: '',
    image: '',
    cost: '5',
    purchased: false,
    showingPrizeImages: true,
    showingPrizeImageInfo: false,
    currentErrors: null,
  }

  componentDidMount() {
    this.props.scrollToMyRef()
    this.setState({
      showingPrizeImages: true
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
      showingPrizeImages, 
      showingPrizeImageInfo
    } = this.state
    
    this.setState({
      showingPrizeImages: !showingPrizeImages, 
      showingPrizeImageInfo: !showingPrizeImageInfo
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const history = this.props.history
    this.props.addNewPrize(this.state, history)
  }

  renderCreatePrizeErrors = () => {
    const currentErrors = this.state.currentErrors
    if (currentErrors) {
      return (
        <ErrorsContainer
          errors={this.props.errors}
        />
      )
    }
    else return null
  }

  render() {
    const {
      showingPrizeImages, 
      showingPrizeImageInfo
    } = this.state

    const children = JSON.parse(localStorage.getItem("childNames"))
    
    if (children !== null) {
      return (
        <div ref={this.props.refProp} id="new-prize-form-container">
          <h1>Create a new Prize</h1>
          <form onSubmit={this.handleSubmit}>
         
          <label htmlFor="new-prize-child">
            Choose the Child the Prize is for:
          </label>
  
          <select
            id="new-prize-child"
            name="prizeReceiverId"
            onChange={this.handleChange}>
              <option>Select Name Here</option>
              {children.map(child =>
                <option key={child.id} value={child.id}>{child.name}</option>
              )}
          </select><br/><br/>
  
            <label htmlFor="new-prize-name">
              Prize Name:
            </label>
  
            <input
              id="new-prize-name"
              name="name" 
              placeholder="Name Your Prize Here"
              value={this.state.name}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>
  
            <label htmlFor="new-prize-image">
              Prize Image URL:
            </label>
  
            <input
              id="new-prize-image"
              name="image" 
              placeholder="Manually Add Image Url"
              value={this.state.image}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>
  
            {showingPrizeImages
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
  
            {this.renderCreatePrizeErrors()}
  
            <label htmlFor="new-prize-cost">
              Choose Prize Cost:
            </label>
  
            <select 
              id="new-prize-cost" 
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
              value="Create Prize">
            </input>
          </form>
        </div>
      )
    }
    else return <h2>Help your Child(ren) make a User(s) to start making Prizes.</h2>
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.adultUserReducer.currentUser,
    prizes: state.prizeReducer.prizes,
    errors: state.prizeReducer.errors
  }
}

export default connect(mapStateToProps, { addNewPrize })(NewPrizeForm)