import React, { Component } from 'react'
import {connect} from 'react-redux'

import childUserProfile from '../../../actions/users/childUsers/childUserProfile'
import ChildUserInfo from './ChildUserInfo'

class ChildUserProfile extends Component {
  
  render() {
    return (
      <div>
        <ChildUserInfo />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  childUserProfile: () => dispatch(childUserProfile())
})

export default connect(null, mapDispatchToProps)(ChildUserProfile)