import React from 'react'
import Error from '../errors/Error'
import {Link } from 'react-router-dom'

const prizeBarStyle = {
  height: 'auto',
  background: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
  display: 'flex',
  flexWrap: 'wrap',
  width: 'auto',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const prizeImgStyle = {
  maxWidth: '200px',
  maxHeight: '100px'
}

const linkStyle = {
  fontSize: '20px',
  height: '80%',
  width: '10vw',
  display: 'flex',
  justifyContent: 'center',
  margin: '5px',
  alignItems: 'center',
  borderRadius: '1rem',
  border: '2px solid black',
  textDecoration: 'none',
  color: 'inherit'
}

const Prizes = (props) => {
  
  const renderPrizes = () => {
    if (props.prizes.length === 0) {
      return <h2>You Currently have 0 prizes.</h2>
    } else {
      return props.prizes.map(prize => 

        <Link key={prize.id} to={`/prizes/${prize.id}`} style={linkStyle}>
          <span id={prize.id}>
            {prize.name}
            <img 
              src={prize.image} 
              alt="prize img"
              style={prizeImgStyle}
            />
            {prize.prize_child.name}
          </span>
        </Link>)
    }
  }

   return (
    <div 
      id='prize-bar' 
      style={prizeBarStyle}>
        {props.loading
          ?  <h1>"Loading..."</h1> 
          :  renderPrizes()
        }
        {props.errorMessage
          ? <Error />
          : null
        }
    </div>
  )
}

export default Prizes