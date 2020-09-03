import React, {Component} from 'react'
import {connect} from 'react-redux'

import childUserLogin from '../../../actions/users/childUsers/childUserLogin'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class ChildLoginForm extends Component {
  
  state = {
    name: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.childUserLogin(this.state)
  }

  render() {
    return (
      <div>
        <h2>Please Login:</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            name='name' 
            placeholder="Name:"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input>

          <input
            type="password" 
            name="password" 
            placeholder="Password:"
            value={this.state.password}
            onChange={this.handleChange}
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

export default connect(null, { childUserLogin })(ChildLoginForm)