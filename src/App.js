import React, { Component } from 'react';
import MainHeader from './MainHeader'
import IndexNavBar from './IndexNavBar'
import StickersContainer from './containers/StickersContainer';

const appStyle = {
  display: "block",
  justifyContent: "center",
  textAlign: 'center'
}

class App extends Component {
  
  render() {
    return (
      <div className="App" style={appStyle}>
        <MainHeader />
        <IndexNavBar />
        <StickersContainer />
      </div>
    );
  }
}

export default App;
