import React, {Component} from 'react'
import {connect} from 'react-redux'

import ChildLoginform from '../../components/users/childUsers/ChildLoginForm'
import ChildSignupForm from '../../components/users/childUsers/ChildSignupForm'
import ChildNavBar from '../../components/users/childUsers/ChildNavBar'

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
          <ChildSignupForm />
        </div>
      )
  }
}

const mapStateToProps = function(state) {
  return {
    loggedIn: state.childUserReducer.currentUser.logged_in
  }
}

export default connect(mapStateToProps)(ChildUsersContainer)