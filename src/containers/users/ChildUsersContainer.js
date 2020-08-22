import React, {Component} from 'react'
import {connect} from 'react-redux'

import ChildLoginform from '../../components/users/childUsers/ChildLoginForm'
import ChildSignupForm from '../../components/users/childUsers/ChildSignupForm'
import childUserProfile from '../../actions/users/childUsers/childUserProfile'
import ErrorsContainer from '../ErrorsContainer'
import IndexNavBar from '../../IndexNavBar'
import ChildUserProfile from '../../components/users/childUsers/ChildUserProfile'

class ChildUsersContainer extends Component {

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
    const {childLoggedIn} = this.props

    if (childLoggedIn) return <ChildUserProfile />

    else {
      return ( 
        <div id="child-login-signup-container">
          <IndexNavBar />
          <ChildLoginform />
          {this.renderLoginError()}
          {this.renderSignupErrors()}
          <ChildSignupForm />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.childUserReducer.errorMessage,
    errors: state.childUserReducer.errors
  }
}

export default connect(mapStateToProps, { childUserProfile })(ChildUsersContainer)