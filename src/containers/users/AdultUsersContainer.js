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
        <ErrorsContainer 
          loginError={this.props.loginError}
          scrollTo={this.props.scrollTo}
        />
      )
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
          <AdultSignupForm />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.adultUserReducer.currentUser.logged_in,
    loginError: state.errorReducer.message
  }
}

export default connect(mapStateToProps, { adultUserProfile })(AdultUsersContainer)