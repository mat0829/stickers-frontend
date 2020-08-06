import React, {Component} from 'react'
import {connect} from 'react-redux'

import AdultLoginform from '../../components/users/adultUsers/AdultLoginForm'
import AdultSignupForm from '../../components/users/adultUsers/AdultSignupForm'
import AdultNavBar from '../../components/users/adultUsers/AdultNavBar'
import adultUserProfile from '../../actions/users/adultUsers/adultUserProfile'

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
  
  render() {
    const isLoggedIn = this.props.loggedIn
    
    if (isLoggedIn) {
      return (
        <div>
          <AdultNavBar />
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

export default connect(mapStateToProps, { adultUserProfile })(AdultUsersContainer)