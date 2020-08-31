import React, { Component } from 'react'
import {Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

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
import purchasePrize from './actions/prizes/purchasePrize'
import childUserUpdate from './actions/users/childUsers/childUserUpdate'
import childUserDelete from './actions/users/childUsers/childUserDelete'
import childUserLogout from './actions/users/childUsers/childUserLogout'
import markTaskComplete from './actions/tasks/markTaskComplete'
import editTask from './actions/tasks/editTask'
import deleteTask from './actions/tasks/deleteTask'

import editPrize from './actions/prizes/editPrize'
import deletePrize from './actions/prizes/deletePrize'
import AdultUserInfo from './components/users/adultUsers/AdultUserInfo'
import ChildUserInfo from './components/users/childUsers/ChildUserInfo'
import AdultUsersContainer from './containers/users/AdultUsersContainer'
import ChildUsersContainer from './containers/users/ChildUsersContainer'
import TasksContainer from './containers/TasksContainer'
import NewTaskForm from './components/tasks/NewTaskForm'
import TaskInfo from './components/tasks/TaskInfo'
import EditTaskForm from './components/tasks/EditTaskForm'
import StickersCollection from './components/stickers/StickersCollection'

import PrizesContainer from './containers/PrizesContainer'
import PrizesCollection from './components/prizes/PrizesCollection'
import NewPrizeForm from './components/prizes/NewPrizeForm'
import PrizeInfo from './components/prizes/PrizeInfo'
import EditPrizeForm from './components/prizes/EditPrizeForm'

const appStyle = {
  display: "block",
  justifyContent: "center",
  textAlign: 'center'
}

class App extends Component {

  state = {
    myRef: React.createRef()
  }

  scrollToMyRef = () => {
    if (this.state.myRef.current) {
      window.scrollTo(0, this.state.myRef.current.offsetTop)
    }
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
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
      purchasePrize,
      childUserUpdate,
      childUserDelete,
      childUserLogout,
      tasks,
      prizes
    } = this.props

    return (
      <div className="App" style={appStyle}>
        <Zoom>
          <MainHeader />
        </Zoom>

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
                refProp={this.state.myRef}
                scrollToMyRef={this.scrollToMyRef}
                {...props}
              />
            }>
          </Route>

          <Route 
            exact path='/kid-homepage'
            render={(props) => 
              <ChildUsersContainer 
                childLoggedIn={childLoggedIn}
                refProp={this.state.myRef}
                scrollToMyRef={this.scrollToMyRef}
                {...props}
              />
            }>
          </Route>

          <Route
            exact path='/adult/profile'
            render={props =>
              <Fade bottom onReveal={ () => this.scrollToMyRef()}>
                <AdultUserInfo
                  adultUser={adultUser} 
                  adultUserProfile={adultUserProfile} 
                  adultUserDelete={adultUserDelete}
                  scrollToTop={this.scrollToTop}
                  refProp={this.state.myRef}
                  {...props}
                />
              </Fade>
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
              <Fade bottom onReveal={ () => this.scrollToMyRef()}>
                <ChildUserInfo
                  childUser={childUser} 
                  childUserProfile={childUserProfile} 
                  childUserDelete={childUserDelete}
                  scrollToTop={this.scrollToTop}
                  refProp={this.state.myRef}
                  {...props}
                />
              </Fade>
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
            render={() => 
              <TasksContainer 
                adultLoggedIn={adultLoggedIn}
                refProp={this.state.myRef}
                scrollToMyRef={this.scrollToMyRef}
              />
            }>
          </Route>

          <Route 
            exact path='/tasks/new'
            render={props => 
              <NewTaskForm
                refProp={this.state.myRef}
                scrollToMyRef={this.scrollToMyRef}
                {...props}
              />
            }>
          </Route>

          <Route 
            exact path='/tasks/:id'
            render={props => {
              const task = tasks.find(task => task.id === parseInt(props.match.params.id))
                return (
                  <Fade bottom onReveal={ () => this.scrollToMyRef()}>
                    <TaskInfo 
                      task={task}
                      {...props}
                      adultUser={adultUser} 
                      childUser={childUser}
                      collectStickerPoints={collectStickerPoints}
                      handleMarkTaskComplete={this.handleMarkTaskComplete}
                      deleteTask={this.props.deleteTask}
                      scrollToTop={this.scrollToTop}
                      refProp={this.state.myRef}
                    />
                  </Fade>
                )
            }}>
          </Route>

          <Route
            exact path='/tasks/:id/edit'
            render={props => {
              const task = tasks.find(task => task.id === parseInt(props.match.params.id))
              return (
                  <EditTaskForm
                    task={task} 
                    editTask={this.props.editTask}
                    refProp={this.state.myRef}
                    scrollToMyRef={this.scrollToMyRef}
                    {...props}
                  />
              )
            }}>
          </Route>

          <Route
            exact path='/stickers-collection'
            render={() =>
              <Fade bottom onReveal={ () => this.scrollToMyRef()}>
                <StickersCollection childUser={childUser} refProp={this.state.myRef}/>
              </Fade>
              }>
          </Route>

          <Route 
            exact path='/prizes'
            render={() => 
              <PrizesContainer 
                adultLoggedIn={adultLoggedIn}
                refProp={this.state.myRef}
                scrollToMyRef={this.scrollToMyRef}
              />
            }>
          </Route>

          <Route 
            exact path='/prizes/new'
            render={props => 
              <NewPrizeForm
                refProp={this.state.myRef}
                scrollToMyRef={this.scrollToMyRef}
                {...props}
              />
            }>
          </Route>

          <Route 
            exact path='/prizes/:id'
            render={props => {
              const prize = prizes.find(prize => prize.id === parseInt(props.match.params.id))
                return (
                  <Fade bottom onReveal={ () => this.scrollToMyRef()}>
                    <PrizeInfo 
                      prize={prize}
                      {...props}
                      adultUser={adultUser} 
                      childUser={childUser}
                      purchasePrize={purchasePrize}
                      deletePrize={this.props.deletePrize}
                      scrollToTop={this.scrollToTop}
                      refProp={this.state.myRef}
                    />
                  </Fade>
                )
            }}>
          </Route>

          <Route
            exact path='/prizes/:id/edit'
            render={props => {
              const prize = prizes.find(prize => prize.id === parseInt(props.match.params.id))
              return (
                  <EditPrizeForm
                    prize={prize} 
                    editPrize={this.props.editPrize}
                    refProp={this.state.myRef}
                    scrollToMyRef={this.scrollToMyRef}
                    {...props}
                  />
              )
            }}>
          </Route>

          <Route
            exact path='/prizes-collection'
            render={() =>
              <Fade bottom onReveal={ () => this.scrollToMyRef()}>
                <PrizesCollection childUser={childUser} refProp={this.state.myRef}/>
              </Fade>
            }>
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
    tasks: state.taskReducer.tasks,
    prizes: state.prizeReducer.prizes
  }
}

export default connect(mapStateToProps, {
  adultUserProfile,
  adultUserUpdate,
  adultUserDelete,
  adultUserLogout,
  childUserProfile,
  collectStickerPoints,
  purchasePrize,
  childUserUpdate,
  childUserDelete,
  childUserLogout,
  markTaskComplete,
  editTask,
  deleteTask,
  editPrize,
  deletePrize
 })(App)
