import React from 'react'
import LoginError from '../components/errors/LoginError'
import SignupErrors from '../components/errors/SignupErrors'

const ErrorsContainer = (props) => {
  if (props.loginError)
    return (
      <div>
        <LoginError loginError={props.loginError}/>
      </div>
    )
  else if (props.signupErrors.length)
    return (
      <div>
        <SignupErrors signupErrors={props.signupErrors}/>
      </div>
    )
  else return null
}

export default ErrorsContainer