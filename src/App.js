import React, { Component } from 'react'
import {connect} from 'react-redux'

import MainHeader from './MainHeader'
import IndexNavBar from './IndexNavBar'
import AdultNavBar from './components/users/adultUsers/AdultNavBar'
import AdultUsersContainer from './containers/users/AdultUsersContainer'

const appStyle = {
  display: "block",
  justifyContent: "center",
  textAlign: 'center'
}

class App extends Component {
  
  render() {
    const adultLoggedIn = this.props.adultLoggedIn
    if (adultLoggedIn) {
      return <div className="App" style={appStyle}>
        <MainHeader />
        <AdultNavBar />
        <AdultUsersContainer />
        </div>
    }
      return (
        <div className="App" style={appStyle}>
          <MainHeader />
          <IndexNavBar />
        </div>
      )
  }
}

const mapStateToProps = function(state) {
  return {
    adultLoggedIn: state.adultUserReducer.currentUser.logged_in
  }
}

export default connect(mapStateToProps)(App)
