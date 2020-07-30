import React, {Component} from 'react'
import {connect} from 'react-redux'

import childCreateAvatar from '../../../actions/users/childUsers/childCreateAvatar'
import childUserSignup from '../../../actions/users/childUsers/childUserSignup'
import ChildUserAvatar from './ChildUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class ChildSignupForm extends Component {

  state = {
    name: '',
    email: 'email@email.com',
    password: 'password',
    avatar: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick = event => {
    event.preventDefault()
    let avatar = this.props.childCreateAvatar()
    this.setState({
      avatar: avatar.payload
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.childUserSignup(this.state)
  }
  
  renderAvatar(){
    if(this.props.currentUser.avatar)
      return (
        <div>
          <h3>(Sample of your Avatar)</h3>
          <ChildUserAvatar imgURL={this.props.currentUser.avatar} />
          <h3>(Generate as many times as you wish!)</h3>
        </div>
      )
    return null
  } 

  render() {
    return (
      <div>
        <h2>New child User:</h2>
        <form onSubmit={this.handleSubmit} style={{paddingBottom: "2vw"}}>
          
          <label htmlFor="child-new-user-name">Name:</label>
          <input  
            name="name" 
            placeholder="Enter Your Name"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="child-new-user-email">Email:</label>
          <input 
            name="email" 
            placeholder="Enter Your Email Address"
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="child-new-user-password">Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Create a Password"
            value={this.state.password}
            onChange={this.handleChange}>
          </input><br/><br/>

          <label htmlFor="child-new-user-avatar">Avatar Image URL:</label>
          <input
            name="avatar" 
            placeholder="Add your own or --->"
            value={this.state.avatar}
            onChange={this.handleChange}
            autoComplete="off">
          </input>
          
          {this.renderAvatar()}
          
          <button
            onClick={this.handleClick}
            style={btnStyle}>Generate an Avatar
          </button><br/><br/>

          <input
            style={btnStyle}
            type="submit" 
            value="Create User">
          </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.childUserReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  childCreateAvatar: () => dispatch(childCreateAvatar()),
  childUserSignup: userInfo => dispatch(childUserSignup(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildSignupForm)