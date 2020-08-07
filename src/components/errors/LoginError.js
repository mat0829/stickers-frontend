import React from 'react'

const h2Style = {
  color: 'red'
}

const LoginError = (props) => {
  return (
    <div>
      <h2 style={h2Style}>{props.loginError}</h2>
    </div>
  )
}

export default LoginError