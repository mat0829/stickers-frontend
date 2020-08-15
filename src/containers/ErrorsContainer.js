import React from 'react'
import Error from '../components/errors/Error'
import Errors from '../components/errors/Errors'

const ErrorsContainer = (props) => {
  if (props.errorMessage) {
    return (
      <div id="error-message">
        <Error errorMessage={props.errorMessage}/>
      </div>
    )
  }
  else if (props.errors && props.errors.length) {
    return (
      <div id="errors-container">
        <Errors errors={props.errors}/>
      </div>
    )
  }
  else return null
}

export default ErrorsContainer