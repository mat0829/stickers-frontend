import React, { Component } from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import MainHeader from './MainHeader'
import Home from './components/Home'
import AdultNavBar from './components/users/adultUsers/AdultNavBar'
import AdultEditUserForm from './components/users/adultUsers/AdultEditUserForm'
import ChildNavBar from './components/users/childUsers/ChildNavBar'
import ChildEditUserForm from './components/users/childUsers/ChildEditUserForm'
import adultUserProfile from './actions/users/adultUsers/adultUserProfile'
import adultUserUpdate from './actions/users/adultUsers/adultUserUpdate'
import adultUserDelete from './actions/users/adultUsers/adultUserDelete'
import adultUserLogout from './actions/users/adultUsers/adultUserLogout'
import childUserProfile from './actions/users/childUsers/childUserProfile'
import collectStickerPoints from './actions/tasks/collectStickerPoints'
import childUserUpdate from './actions/users/childUsers/childUserUpdate'
import childUserDelete from './actions/users/childUsers/childUserDelete'
import childUserLogout from './actions/users/childUsers/childUserLogout'
import markTaskComplete from './actions/tasks/markTaskComplete'
import editTask from './actions/tasks/editTask'
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

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  scrollTo = id => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' })
  }

  handleMarkTaskComplete = task => {
    task.completed = !task.completed
    this.props.markTaskComplete(task)
  }

  render() {
    const {
      adultLoggedIn, 
      childLoggedIn,
      adultUser,
      adultUserProfile,
      adultUserUpdate,
      adultUserDelete,
      adultUserLogout,
      childUser,
      childUserProfile,
      collectStickerPoints,
      childUserUpdate,
      childUserDelete,
      childUserLogout,
      tasks
    } = this.props

    return (
      <div className="App" style={appStyle}>
        <MainHeader />

          {(() => {
            if (adultLoggedIn === true) {
              return <AdultNavBar adultUserLogout={adultUserLogout} />
            } 
            else if (childLoggedIn === true) {
              return <ChildNavBar childUserLogout={childUserLogout} />
            }
            else {
              return <Redirect to='/'/>
            }
          })()}
        
        <Switch>
          <Route 
            exact path='/'
            component={Home}>
          </Route>

          <Route 
            exact path='/adult-homepage'
            render={(props) =>
              <AdultUsersContainer 
                adultLoggedIn={adultLoggedIn}
                scrollTo={this.scrollTo}
                {...props}
              />
            }>
          </Route>

          <Route 
            exact path='/kid-homepage'
            render={(props) => 
              <ChildUsersContainer 
                childLoggedIn={childLoggedIn}
                scrollTo={this.scrollTo}
                {...props}
              />
            }>
          </Route>

          <Route
            exact path='/adult/profile'
            render={props => 
              <AdultUserProfile 
                adultUser={adultUser} 
                adultUserProfile={adultUserProfile} 
                adultUserDelete={adultUserDelete}
                scrollToTop={this.scrollToTop}
                {...props}
              />
            }>
          </Route>

          <Route
            exact path='/adult/profile/edit'
            render={props => 
              <AdultEditUserForm 
                adultUser={adultUser} 
                adultUserUpdate={adultUserUpdate} 
                {...props}
              />
            }>
          </Route>

          <Route
            exact path='/child/profile'
            render={props => 
              <ChildUserProfile 
                childUser={childUser} 
                childUserProfile={childUserProfile} 
                childUserDelete={childUserDelete}
                scrollToTop={this.scrollToTop}
                {...props}
              />
            }>
          </Route>

          <Route
            exact path='/child/profile/edit'
            render={props => 
              <ChildEditUserForm 
                childUser={childUser} 
                childUserUpdate={childUserUpdate} 
                {...props}
              />
            }>
          </Route>

          <Route 
            exact path='/tasks' 
            component={TasksContainer}>
          </Route>

          <Route 
            exact path='/tasks/new'
            render={props => <NewTaskForm {...props}/>}>
          </Route>

          <Route 
            exact path='/tasks/:id'
            render={props => {
              const task = tasks.find(task => task.id === parseInt(props.match.params.id))
                return (
                  <TaskInfo 
                    task={task}
                    {...props}
                    adultUser={adultUser} 
                    childUser={childUser}
                    collectStickerPoints={collectStickerPoints}
                    handleMarkTaskComplete={this.handleMarkTaskComplete}
                    deleteTask={this.props.deleteTask}
                    scrollToTop={this.scrollToTop}
                  />
                )
            }}>
          </Route>

          <Route
            exact path='/tasks/:id/edit'
            render={props => {
              const task = tasks.find(task => task.id === parseInt(props.match.params.id))
              return (
                <div className='center-content padding'>
                  <EditTaskForm task={task} editTask={this.props.editTask} {...props}/>
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
  adultUserUpdate,
  adultUserDelete,
  adultUserLogout,
  childUserProfile,
  collectStickerPoints,
  childUserUpdate,
  childUserDelete,
  childUserLogout,
  markTaskComplete,
  editTask,
  deleteTask
 })(App)
