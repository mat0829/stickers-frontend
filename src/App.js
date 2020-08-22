import React, { Component } from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import MainHeader from './MainHeader'
import Home from './components/Home'
import AdultNavBar from './components/users/adultUsers/AdultNavBar'
import ChildNavBar from './components/users/childUsers/ChildNavBar'
import adultUserProfile from './actions/users/adultUsers/adultUserProfile'
import childUserProfile from './actions/users/childUsers/childUserProfile'
import AdultUserProfile from './components/users/adultUsers/AdultUserProfile'
import ChildUserProfile from './components/users/childUsers/ChildUserProfile'
import AdultUsersContainer from './containers/users/AdultUsersContainer'
import ChildUsersContainer from './containers/users/ChildUsersContainer'
import TasksContainer from './containers/TasksContainer'
import NewTaskForm from './components/tasks/NewTaskForm'

const appStyle = {
  display: "block",
  justifyContent: "center",
  textAlign: 'center'
}

class App extends Component {
  render() {
    const {adultLoggedIn, childLoggedIn} = this.props

    return (
      <div className="App" style={appStyle}>
        <MainHeader />

          {(() => {
            if (adultLoggedIn === true) {
              return (
                <>
                  <AdultNavBar />
                </>
              )
            } 
            else if (childLoggedIn === true) {
              return (
                <>
                  <ChildNavBar />
                </>
              )
            }
            else {
              return (
                <div>
                  <Redirect to='/'/>
                </div>
              )
            }
          })()}
        
        <Switch>
          <Route 
            exact path='/'
            component={Home}>
          </Route>

          <Route 
            exact path='/adult-homepage'
            render={(props) => (
              <AdultUsersContainer {...props} adultLoggedIn={adultLoggedIn} />
            )}>
          </Route>

          <Route 
            exact path='/kid-homepage'
            render={(props) => (
              <ChildUsersContainer {...props} childLoggedIn={childLoggedIn} />
            )}>
          </Route>

          <Route 
            exact path='/adult/profile' 
            component={AdultUserProfile}>
          </Route>

          <Route 
            exact path='/child/profile' 
            component={ChildUserProfile}>
          </Route>

          <Route 
            exact path='/adult-tasks' 
            component={TasksContainer}>
          </Route>

          <Route 
            exact path='/child-tasks' 
            component={TasksContainer}>
          </Route>

          <Route 
            exact path='/adult-tasks/new' 
            component={NewTaskForm}>
          </Route>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    adultLoggedIn: state.adultUserReducer.currentUser.logged_in,
    childLoggedIn: state.childUserReducer.currentUser.logged_in,
    //tasks: state.taskReducer.tasks
  }
}

export default connect(mapStateToProps, {
  adultUserProfile,
  childUserProfile
 })(App)
