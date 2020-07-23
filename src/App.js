import React, { Component } from 'react';
import MainHeader from './MainHeader'
import IndexNavBar from './IndexNavBar'

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
      </div>
    );
  }
}

export default App;
