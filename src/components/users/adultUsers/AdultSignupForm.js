import React, {Component} from 'react'
import {connect} from 'react-redux'

import userCreateAvatar from '../../../actions/avatar/userCreateAvatar'
import userSignupFetch from '../../../actions/users/adultUsers/userSignupFetch'
import AdultUserAvatar from './AdultUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class AdultSignupForm extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
    avatar: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick = event => {
    event.preventDefault()
    let avatar = this.props.userCreateAvatar()
    this.setState({
      avatar: avatar.payload
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userSignupFetch(this.state)
  }
  
  renderAvatar(){
    if(this.props.currentUser.avatar)
      return <AdultUserAvatar imgURL={this.props.currentUser.avatar} />
    return null;
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
    currentUser: state.adultUserReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  userCreateAvatar: () => dispatch(userCreateAvatar()),
  userSignupFetch: userInfo => dispatch(userSignupFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdultSignupForm)