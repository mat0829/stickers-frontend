import React, {Component} from 'react'
import {connect} from 'react-redux'
import Zoom from 'react-reveal/Zoom'

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

  scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' })
  }

  renderLoginError = () => {
    let loginFailure
    this.props.loginError 
      ? loginFailure = true 
      : loginFailure = false
      
    if (loginFailure)
      return (
        <Zoom>
          <ErrorsContainer 
            loginError={this.props.loginError}
          />
        </Zoom>
      )
    else
      return null
  }

  renderSignupErrors = () => {
    let signupFailure
    this.props.signupErrors
      ? signupFailure = true
      : signupFailure = false

    if (signupFailure)
      return (
        <Zoom>
          <ErrorsContainer
            scrollTo={this.scrollTo('adult-login-signup-container')}
            signupErrors={this.props.signupErrors}
          />
        </Zoom>
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
    loginError: state.errorReducer.message,
    signupErrors: state.errorReducer.signupErrors
  }
}

export default connect(mapStateToProps, { adultUserProfile })(AdultUsersContainer)