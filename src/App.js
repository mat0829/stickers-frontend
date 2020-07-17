import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import IndexNavBar from './components/IndexNavBar'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MainHeader />
        <IndexNavBar />
      </div>
    );
  }
}

export default App;
