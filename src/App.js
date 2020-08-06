import React, { Component } from 'react'
import {connect} from 'react-redux'

import MainHeader from './MainHeader'
import IndexNavBar from './IndexNavBar'
import adultUserProfile from './actions/users/adultUsers/adultUserProfile'
import childUserProfile from './actions/users/childUsers/childUserProfile'
import AdultUsersContainer from './containers/users/AdultUsersContainer'
import ChildUsersContainer from './containers/users/ChildUsersContainer'

const appStyle = {
  display: "block",
  justifyContent: "center",
  textAlign: 'center'
}

class App extends Component {

  componentDidMount() {
    if (this.props.adultLoggedIn) {
      this.props.adultUserProfile()
    } else if (this.props.childLoggedIn) 
      this.props.childUserProfile()
  }
  
  render() {
    const adultLoggedIn = this.props.adultLoggedIn
    const childLoggedIn = this.props.childLoggedIn

    if (adultLoggedIn) {
      return (
        <div className="App" style={appStyle}>
          <MainHeader />
          <AdultUsersContainer />
        </div>
      )
    } else if (childLoggedIn) {
      return (
        <div className="App" style={appStyle}>
          <MainHeader />
          <ChildUsersContainer />
        </div>
      )
    }
      return (
        <div 
          className="App" 
          style={appStyle}>
            <MainHeader />
            <IndexNavBar />
        </div>
      )
  }
}

const mapStateToProps = function(state) {
  return {
    adultLoggedIn: state.adultUserReducer.currentUser.logged_in,
    childLoggedIn: state.childUserReducer.currentUser.logged_in
  }
}

export default connect(mapStateToProps, {
  adultUserProfile,
  childUserProfile
 })(App)
