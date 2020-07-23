import React, {Component} from 'react'

import AdultLoginform from '../../components/users/adultUsers/AdultLoginForm'
import AdultSignupForm from '../../components/users/adultUsers/AdultSignupForm'

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