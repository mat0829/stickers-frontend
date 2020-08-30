import React from 'react'

const imgStyle = {
  maxWidth: '300px',
  maxHeight: '150px'
}

const spanStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end'
}

const getOccurrence = (array, value) => {
  let count = 0
  array.forEach((v) => (v === value && count++))
  return count
}

const PrizesCollection = (props) => {
  const childUser = props.childUser
  
  if (props.childUser.prizes.length !== 0) {
    const arrayWithoutDuplicates = [...new Set(childUser.prizes)]
    const prizesCollection = arrayWithoutDuplicates.map( (prize, id) => (
      <div key={id}>
        {
          <>
            <img 
              src={prize} 
              alt="prize img" 
              style={imgStyle}
            /><br/>
            ( {getOccurrence(childUser.prizes, prize)} collected )
          </>
        }
      </div>
    ))
    
    return (
      <div ref={props.refProp}>
        <h1>Your Prizes Collection:</h1>
        <h2>Total Prizes = {childUser.prizes.length}</h2>
        <span style={spanStyle}>{prizesCollection}</span>
      </div>
    )
  }
  else return <h2>You currently have 0 Prizes. Complete Tasks to get Points to purchase Prizes.</h2>
}

export default PrizesCollection