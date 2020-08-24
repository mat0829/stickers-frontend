import React, { Component } from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import MainHeader from './MainHeader'
import Home from './components/Home'
import AdultNavBar from './components/users/adultUsers/AdultNavBar'
import ChildNavBar from './components/users/childUsers/ChildNavBar'
import adultUserProfile from './actions/users/adultUsers/adultUserProfile'
import childUserProfile from './actions/users/childUsers/childUserProfile'
import markTaskComplete from './actions/tasks/markTaskComplete'
import deleteTask from './actions/tasks/deleteTask'
import AdultUserProfile from './components/users/adultUsers/AdultUserProfile'
import ChildUserProfile from './components/users/childUsers/ChildUserProfile'
import AdultUsersContainer from './containers/users/AdultUsersContainer'
import ChildUsersContainer from './containers/users/ChildUsersContainer'
import TasksContainer from './containers/TasksContainer'
import NewTaskForm from './components/tasks/NewTaskForm'
import TaskInfo from './components/tasks/TaskInfo'
import EditTaskForm from './components/tasks/EditTaskForm'

const appStyle = {
  display: "block",
  justifyContent: "center",
  textAlign: 'center'
}

class App extends Component {

  handleMarkTaskComplete = task => {
    task.completed = !task.completed
    this.props.markTaskComplete(task)
  }

  render() {
    const {
      adultLoggedIn, 
      childLoggedIn,
      adultUser,
      childUser,
      tasks
    } = this.props

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
            exact path='/tasks' 
            component={TasksContainer}>
          </Route>

          <Route 
            exact path='/tasks/new' 
            component={NewTaskForm}>
          </Route>

          <Route 
            exact path='/tasks/:id'
            render={props => {
              const task = tasks.find(task => task.id === parseInt(props.match.params.id))
                return (
                  <TaskInfo 
                    task={task}
                    history={props.history}
                    adultUser={adultUser} 
                    childUser={childUser}
                    handleMarkTaskComplete={this.handleMarkTaskComplete}
                    deleteTask={this.props.deleteTask}
                    {...this.props}
                  />
                )
            }}>
          </Route>

          <Route
            path='/tasks/:id/edit'
            render={props => {
              const task = tasks.find(task => task.id === parseInt(props.match.params.id))
              return (
                <div className='center-content padding'>
                  <EditTaskForm task={task} {...this.props}/>
                  <TaskInfo task={task} {...this.props}/>
                </div>
              )
            }}>
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
    adultUser: state.adultUserReducer.currentUser,
    childUser: state.childUserReducer.currentUser,
    tasks: state.taskReducer.tasks
  }
}

export default connect(mapStateToProps, {
  adultUserProfile,
  childUserProfile,
  markTaskComplete,
  deleteTask
 })(App)
