import React, {Component} from 'react'
import {connect} from 'react-redux'

import userPostFetch from '../../../actions/users/adultUsers/userPostFetch'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class AdultSignupForm extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
    avatar: 'https://robohash.org/Random-Robot-Avatar1.png'
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <div>
        <h2>New Adult User:</h2>
        <form onSubmit={this.handleSubmit} style={{paddingBottom: "2vw"}}>
          <label htmlFor="adult-new-user-name">Name:</label>
          <input  
            name="name" 
            placeholder="Enter Your Name"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="adult-new-user-email">Email:</label>
          <input 
            name="email" 
            placeholder="Enter Your Email Address"
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="adult-new-user-password">Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Create a Password"
            value={this.state.password}
            onChange={this.handleChange}>
          </input><br/><br/>

          <label htmlFor="adult-new-user-avatar">Avatar Image URL:</label>
          <input
            name="avatar" 
            placeholder="Leave to Generate Avatar"
            value={this.state.avatar}
            onChange={this.handleChange}
            autoComplete="off">
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

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(AdultSignupForm)