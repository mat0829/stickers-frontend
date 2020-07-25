import React, {Component} from 'react'
import {connect} from 'react-redux'

import App from '../../App'
import AdultLoginform from '../../components/users/adultUsers/AdultLoginForm'
import AdultSignupForm from '../../components/users/adultUsers/AdultSignupForm'

class AdultUsersContainer extends Component {
  
  render() {
    const isLoggedIn = this.props.loggedIn
    if (isLoggedIn) {
      return <div><App /></div>
    } 
      return (
        <div>
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