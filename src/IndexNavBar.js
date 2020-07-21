import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import AdultUsersContainer from './components/users/adultUsers/AdultUsersContainer';

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
      <NavLink to="/adults-homepage">
        <button 
          style={adultBtnStyle} 
          id="adultPageBtn">Parent's Page</button>
      </NavLink>
      <NavLink to="/kids-homepage">
        <button 
          style={childBtnStyle} 
          id="childPageBtn">Kid's Page</button>
      </NavLink>
      <Route exact path='/adults-homepage' component={AdultUsersContainer}></Route>
    </div>
  );
};

export default IndexNavBar;