import React, {Component} from 'react'
import ChildLoginform from './ChildLoginForm'
import ChildSignupForm from './ChildSignupForm'

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