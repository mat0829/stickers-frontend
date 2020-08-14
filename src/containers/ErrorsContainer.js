import React from 'react'
import Error from '../components/errors/Error'
import Errors from '../components/errors/Errors'

const ErrorsContainer = (props) => {
  if (props.errorMessage)
    return (
      <div>
        <Error errorMessage={props.errorMessage}/>
      </div>
    )
  else if (props.errors.length)
    return (
      <div>
        <Errors errors={props.errors}/>
      </div>
    )
  else return null
}

export default ErrorsContainer