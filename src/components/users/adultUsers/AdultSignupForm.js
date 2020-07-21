import React, {Component} from 'react'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class AdultSignupForm extends Component {
  render() {
    return (
      <div>
        <h2>New Adult User:</h2>
        <form id="adult-new-user-form" style={{paddingBottom: "2vw"}}>
          <label for="adult-new-user-name">Name:</label>
          <input 
            id="adult-new-user-name" 
            type="text" 
            name="name" 
            placeholder="Enter Your Name" 
            autocomplete="off">
          </input><br/><br/>

          <label for="adult-new-user-email">Email:</label>
          <input 
            id="adult-new-user-email" 
            type="text" 
            name="email" 
            placeholder="Enter Your Email Address" 
            autocomplete="off">
          </input><br/><br/>

          <label for="adult-new-user-password">Password:</label>
          <input 
            id="adult-new-user-password" 
            type="password" 
            name="password" 
            placeholder="Create a Password">
          </input><br/><br/>

          <label for="adult-new-user-avatar">Avatar Image URL:</label>
          <input 
            id="adult-new-user-avatar" 
            type="text" 
            name="avatar" 
            placeholder="Leave to Generate Avatar" 
            autocomplete="off">
          </input><br/><br/>

          <input
            style={submitBtnStyle}
            type="submit" 
            value="Create User">
          </input>
        </form>
      </div>
    )
  }
}

export default AdultSignupForm