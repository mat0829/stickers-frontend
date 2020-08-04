import React, { Component } from 'react'
import {connect} from 'react-redux'

import adultUserProfile from '../../../actions/users/adultUsers/adultUserProfile'
import AdultUserInfo from './AdultUserInfo'

class AdultUserProfile extends Component {
  
  render() {
    return (
      <div>
        <AdultUserInfo />
      </div>
    )
  }
}

export default connect(null, { adultUserProfile} )(AdultUserProfile)