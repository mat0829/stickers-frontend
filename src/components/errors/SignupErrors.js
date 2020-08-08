import React from 'react'

const liStyle = {
  color: 'red'
}

const SignupErrors = (props) => {
  const errors = props.signupErrors
  
  const errorsList = errors.map((error, id) => (
      <h2 key={id} style={liStyle}>
        {
          <>
            {error}
          </>
        }
      </h2>
  ))
    
      return errorsList
}

export default SignupErrors