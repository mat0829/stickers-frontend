import React, {Component} from 'react'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class ChildLoginForm extends Component {
  render() {
    return (
      <div>
        <h2>Please Login:</h2>
        <form id="child-user-login-form">
          <input 
            id='child-user-login-name'
            type='text' 
            name='name' 
            placeholder="Name:" 
            autoComplete="off">
          </input>

          <input 
            id="child-user-login-password" 
            type="password" 
            name="password" 
            placeholder="Password:" 
            autoComplete="off">
          </input>

          <input 
            style={submitBtnStyle}
            type="submit" 
            value="Login">
          </input>
        </form>
        <h2>or Sign up below:</h2>
      </div>
    )
  }
}

export default ChildLoginForm