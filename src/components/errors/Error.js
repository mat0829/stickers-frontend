import React from 'react'

const h2Style = {
  color: 'red'
}

const ErrorMessage = (props) => (
  <h2 style={h2Style}>{props.errorMessage}</h2>
)

export default ErrorMessage