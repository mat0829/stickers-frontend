import React, {Component} from 'react'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class ChildSignupForm extends Component {
  render() {
    return (
      <div>
        <h2>New Child User:</h2>
        <form id="child-new-user-form" style={{paddingBottom: "2vw"}}>
          <label for="child-new-user-name">Name:</label>
          <input 
            id="child-new-user-name" 
            type="text" 
            name="name" 
            placeholder="Enter Your Name" 
            autocomplete="off">
          </input><br/><br/>

          <label for="child-new-user-email">Email:</label>
          <input 
            id="child-new-user-email" 
            type="text" 
            name="email" 
            placeholder="Enter Your Email Address" 
            autocomplete="off">
          </input><br/><br/>

          <label for="child-new-user-password">Password:</label>
          <input 
            id="child-new-user-password" 
            type="password" 
            name="password" 
            placeholder="Create a Password">
          </input><br/><br/>

          <label for="child-new-user-avatar">Avatar Image URL:</label>
          <input 
            id="child-new-user-avatar" 
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

export default ChildSignupForm