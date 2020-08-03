import React, {Component} from 'react'
import {connect} from 'react-redux'

import AdultLoginform from '../../components/users/adultUsers/AdultLoginForm'
import AdultSignupForm from '../../components/users/adultUsers/AdultSignupForm'
import AdultUserProfile from '../../components/users/adultUsers/AdultUserProfile'

class AdultUsersContainer extends Component {

  componentDidMount() {
    if (document.getElementById('adult-login-signup-container')) {
      this.scrollTo('adult-login-signup-container')
    } else this.scrollTo('adult-user-info')
  }

  scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' })
  }
  
  render() {
    const isLoggedIn = this.props.loggedIn
    if (isLoggedIn) {
      return (
        <div>
          <AdultUserProfile />
        </div>
      )
    } 
      return (
        <div id="adult-login-signup-container">
          <AdultLoginform />
          <AdultSignupForm />
        </div>
      )
  }
}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.adultUserReducer.currentUser.logged_in
  }
}

export default connect(mapStateToProps)(AdultUsersContainer)