import React, {Component} from 'react'

import ChildLoginform from '../../components/users/childUsers/ChildLoginForm'
import ChildSignupForm from '../../components/users/childUsers/ChildSignupForm'

class ChildUsersContainer extends Component {
  render() {
    return (
      <div>
        <ChildLoginform />
        <ChildSignupForm />
      </div>
    )
  }

}

export default ChildUsersContainer