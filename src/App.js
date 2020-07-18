import React, { Component } from 'react';
import MainHeader from './components/app/MainHeader'
import IndexNavBar from './components/app/IndexNavBar'

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
