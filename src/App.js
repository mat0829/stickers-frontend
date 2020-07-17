import React, { Component } from 'react';
import MainHeader from './components/MainHeader'
import IndexNavBar from './components/IndexNavBar'

class App extends Component {

  componentDidMount() {
    fetch('https://stickers-js-api-backend.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
       },
       body: JSON.stringify({
         // form inputs were stored in vars at the top of DOMContentLoaded event handler (callback Fn)
         user: {
          name: 'Taco',
          email: 'email@email.com',
          password: 'password',
          avatar: 'https://cdn3.vectorstock.com/i/1000x1000/47/92/redhead-male-character-avatar-userpic-vector-17104792.jpg'
         }
       })
    })
    .then((r) => r.json())
    .then(newUserJSON => console.log(newUserJSON))
  }

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
