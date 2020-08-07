import React, { Component } from 'react'
import LoginError from '../components/errors/LoginError'

class ErrorsContainer extends Component {
  render() {
    if (this.props.loginError) {
      return (
        <div>
          <LoginError loginError={this.props.loginError}/>
        </div>
      )
    }
  }
}

export default ErrorsContainer