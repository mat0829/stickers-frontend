import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import AdultUsersContainer from "./containers/users/AdultUsersContainer";

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
      <NavLink to="/adults-homepage">
        <button style={adultBtnStyle} class="adultPageBtn" id="adultPageBtn">Parent's Page</button>
      </NavLink>
      <NavLink to="/kids-homepage">
        <button style={childBtnStyle} class="childPageBtn" id="childPageBtn">Kid's Page</button>
      </NavLink>
      <Route exact path='/adults-homepage' component={AdultUsersContainer}></Route>
    </div>
  );
};

export default IndexNavBar;