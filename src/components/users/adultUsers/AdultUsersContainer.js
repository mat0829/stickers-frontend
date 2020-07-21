import React, {Component} from 'react'
import AdultLoginform from './AdultLoginForm'
import AdultSignupForm from './AdultSignupForm'

class AdultUsersContainer extends Component {
  render() {
    return (
      <div>
        <AdultLoginform />
        <AdultSignupForm />
      </div>
    )
  }

}

export default AdultUsersContainer