import React, { Component } from 'react'
import {connect} from 'react-redux'

import userProfileFetch from '../../../actions/users/adultUsers/userProfileFetch'
//import AdultEditUserForm from './AdultEditUserForm'
import AdultUserInfo from './AdultUserInfo'

class AdultUserProfile extends Component {

  componentDidMount() {
    this.props.userProfileFetch()
  }
  
  render() {

    return (
      <div>
        <AdultUserInfo />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userProfileFetch: () => dispatch(userProfileFetch())
})

export default connect(null, mapDispatchToProps)(AdultUserProfile)