import React from 'react'

const h2Style = {
  color: 'red'
}

const ErrorMessage = (props) => {
  return (
    <div>
      <h2 style={h2Style}>{props.errorMessage}</h2>
    </div>
  )
}

export default ErrorMessage