import React, {Component} from 'react'
import {connect} from 'react-redux'

import AdultLoginform from '../../components/users/adultUsers/AdultLoginForm'
import AdultSignupForm from '../../components/users/adultUsers/AdultSignupForm'
import AdultNavBar from '../../components/users/adultUsers/AdultNavBar'
import adultUserProfile from '../../actions/users/adultUsers/adultUserProfile'
import ErrorsContainer from '../ErrorsContainer'

class AdultUsersContainer extends Component {

  componentDidMount() {
    if (document.getElementById('adult-login-signup-container')) {
      this.scrollTo('adult-login-signup-container')
    }
  }

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
    const isLoggedIn = this.props.loggedIn
    
    if (isLoggedIn)
      return (
        <div>
          <AdultNavBar />
        </div>
      )
      return (
        <div id="adult-login-signup-container">
          <AdultLoginform />
          {this.renderLoginError()}
          {this.renderSignupErrors()}
          <AdultSignupForm />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.adultUserReducer.currentUser.logged_in,
    errorMessage: state.adultUserReducer.errorMessage,
    errors: state.adultUserReducer.errors
  }
}

export default connect(mapStateToProps, { adultUserProfile })(AdultUsersContainer)