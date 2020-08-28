import React from 'react'

const imgStyle = {
  maxWidth: '125px',
  maxHeight: '125px'
}

const spanStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

const getOccurrence = (array, value) => {
  let count = 0
  array.forEach((v) => (v === value && count++))
  return count
}

const StickersCollection = (props) => {

  const childUser = props.childUser
  if (props.childUser.stickers !== 0) {
    const arrayWithoutDuplicates = [...new Set(childUser.stickers)]
    const stickersCollection = arrayWithoutDuplicates.map( (sticker, id) => (
      <div key={id}>
        {
          <>
            <img 
              src={sticker} 
              alt="sticker img" 
              style={imgStyle}
            /><br/>
            ( {getOccurrence(childUser.stickers, sticker)} collected )
          </>
        }
      </div>
    ))
    
    return (
      <div>
        <h1>Your Stickers Collection:</h1>
        <h2>Total Stickers = {childUser.stickers.length}</h2>
        <span style={spanStyle}>{stickersCollection}</span>
      </div>
    )
  }
  else return <h2>You currently have 0 Stickers. Complete Tasks to get Stickers.</h2>
}

export default StickersCollection