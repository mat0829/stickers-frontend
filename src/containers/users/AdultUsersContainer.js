import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import AdultLoginform from '../../components/users/adultUsers/AdultLoginForm'
import AdultSignupForm from '../../components/users/adultUsers/AdultSignupForm'
import ErrorsContainer from '../ErrorsContainer'
import IndexNavBar from '../../IndexNavBar'

class AdultUsersContainer extends Component {

  scrollToTop = () => {
    window.scrollTo({top: 520, behavior: 'smooth'})
  }

  scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' })
  }

  renderLoginError = () => {
    let loginFailure
    this.props.errorMessage 
      ? loginFailure = true 
      : loginFailure = false
      
    if (loginFailure)
      return (
        <ErrorsContainer 
          errorMessage={this.props.errorMessage}
        />
      )
    else
      return null
  }

  renderSignupErrors = () => {
    let signupFailure
    this.props.errors
      ? signupFailure = true
      : signupFailure = false

    if (signupFailure)
      return (
        <ErrorsContainer
          scrollToTop={this.scrollToTop()}
          errors={this.props.errors}
        />
      )
    else 
      return null
  }
  
  render() {
    const {adultLoggedIn} = this.props

    if (adultLoggedIn) return <Redirect to='/adult/profile'/>

    else {
      return (
        <div id="adult-login-signup-container">
          <IndexNavBar />
          <AdultLoginform />
          {this.renderLoginError()}
          {this.renderSignupErrors()}
          <AdultSignupForm />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.adultUserReducer.errorMessage,
    errors: state.adultUserReducer.errors
  }
}

export default connect(mapStateToProps)(AdultUsersContainer)