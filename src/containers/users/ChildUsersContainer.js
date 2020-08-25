import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

import ChildLoginform from '../../components/users/childUsers/ChildLoginForm'
import ChildSignupForm from '../../components/users/childUsers/ChildSignupForm'
import ErrorsContainer from '../ErrorsContainer'
import IndexNavBar from '../../IndexNavBar'

class ChildUsersContainer extends Component {

  componentDidMount() {
    if (document.getElementById('child-login-signup-container'))
    this.props.scrollTo('child-login-signup-container')
  }

  scrollToTop = () => {
    window.scrollTo({top: 520, behavior: 'smooth'})
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

    if (childLoggedIn) return <Redirect to='/child/profile'/>

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

export default connect(mapStateToProps)(ChildUsersContainer)