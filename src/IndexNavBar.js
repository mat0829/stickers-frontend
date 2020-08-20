import React from 'react'
import {Switch, NavLink, Route} from 'react-router-dom'

import AdultUsersContainer from './containers/users/AdultUsersContainer'
import ChildUsersContainer from './containers/users/ChildUsersContainer'

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

      <Switch>
        <Route 
          exact path='/adult-homepage' 
          component={AdultUsersContainer}>
        </Route>

        <Route 
          exact path='/kid-homepage' 
          component={ChildUsersContainer}>
        </Route>
      </Switch>
    </div>
  )
}

export default IndexNavBar