import React, { Component } from 'react'
import {connect} from 'react-redux'

import adultUserProfile from '../../../actions/users/adultUsers/adultUserProfile'
import adultUserDelete from '../../../actions/users/adultUsers/adultUserDelete'
import AdultUserInfo from './AdultUserInfo'
import ErrorsContainer from '../../../containers/ErrorsContainer'

class AdultUserProfile extends Component {

  state = {
    currentErrors: null,
    showingUserProfile: true,
    showingEditForm: false 
  }

  componentDidMount() {
    this.props.adultUserProfile()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        this.handleClick()
        this.setState({
          currentErrors: this.props.errors
        })
      }
    }
  }

  handleClick = () => {
    const {showingUserProfile, showingEditForm} = this.state
    this.setState({
      showingUserProfile: !showingUserProfile, 
      showingEditForm: !showingEditForm
    })
  }

  renderUpdateErrors = () => {
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
    return (
      <div>
        <AdultUserInfo
          renderUpdateErrors={this.renderUpdateErrors}
          adultUserDelete={this.props.adultUserDelete}
          profileState={this.state} 
          handleClick={this.handleClick}
          currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.adultUserReducer.currentUser,
    errors: state.adultUserReducer.errors
  }
}

export default connect(mapStateToProps, {adultUserProfile, adultUserDelete})(AdultUserProfile)