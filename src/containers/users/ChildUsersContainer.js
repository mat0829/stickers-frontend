import React, {Component} from 'react'
import {connect} from 'react-redux'

import ChildLoginform from '../../components/users/childUsers/ChildLoginForm'
import ChildSignupForm from '../../components/users/childUsers/ChildSignupForm'
import ChildNavBar from '../../components/users/childUsers/ChildNavBar'
import ErrorsContainer from '../ErrorsContainer'

class ChildUsersContainer extends Component {

  componentDidMount() {
    if (document.getElementById('child-login-signup-container')) {
      this.scrollTo('child-login-signup-container')
    }
  }

  scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
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
          errors={this.props.errors}
        />
      )
    else 
      return null
  }

  render() {
    const isLoggedIn = this.props.loggedIn
    
    if (isLoggedIn) {
      return (
        <div>
          <ChildNavBar />
        </div>
      )
    } 
      return (
        <div id='child-login-signup-container'>
          <ChildLoginform />
          {this.renderLoginError()}
          {this.renderSignupErrors()}
          <ChildSignupForm />
        </div>
      )
  }
}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.childUserReducer.currentUser.logged_in,
    errorMessage: state.childUserReducer.errorMessage,
    errors: state.childUserReducer.errors
  }
}

export default connect(mapStateToProps)(ChildUsersContainer)