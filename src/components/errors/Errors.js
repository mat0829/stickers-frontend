import React from 'react'

const liStyle = {
  color: 'red'
}

const Errors = (props) => {
  const errors = props.errors
  
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

export default Errors