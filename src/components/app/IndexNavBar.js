import React from 'react';
import { NavLink } from 'react-router-dom';

const navBarStyle = {
  display: 'flex',
  justifyContent: 'center'
}

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
    <div className="index-navbar" style={navBarStyle}>
      <NavLink to="/">
        <button style={adultBtnStyle} class="adultPageBtn" id="adultPageBtn">Parent's Page</button>
      </NavLink>
      <NavLink to="/">
        <button style={childBtnStyle} class="childPageBtn" id="childPageBtn">Kid's Page</button>
      </NavLink>
    </div>
  );
};

export default IndexNavBar;