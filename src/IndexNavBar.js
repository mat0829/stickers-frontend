import React from 'react'
import {NavLink} from 'react-router-dom'

const adultBtnStyle = {
  color: 'black',
  backgroundImage: 'linear-gradient(to right, red, yellow)'
}

const childBtnStyle = {
  color: 'black',
  backgroundImage: 'linear-gradient(to right, gold, lime)'
}

const IndexNavBar = () => {
  return (
    <div className="index-navbar">

      <NavLink to="/adult-homepage">
        <button style={adultBtnStyle}> 
          Parent's Page 
        </button>
      </NavLink>

      <NavLink to="/kid-homepage">
        <button style={childBtnStyle}> 
           Kid's Page
        </button>
      </NavLink>
    </div>
  )
}

export default IndexNavBar