import React, {Component} from 'react'
import {connect} from 'react-redux'

import adultCreateAvatar from '../../../actions/users/adultUsers/adultCreateAvatar'
import adultUserSignup from '../../../actions/users/adultUsers/adultUserSignup'
import AdultUserAvatar from './AdultUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class AdultSignupForm extends Component {

  state = {
    name: 'Darth Mow',
    email: 'email@email.com',
    password: 'password',
    avatar: 'https://cataas.com/cat?396'
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.setState({
        avatar: this.props.currentUser.avatar
      })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick = event => {
    event.preventDefault()
    this.setState({
      avatar: this.props.adultCreateAvatar()
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.adultUserSignup(this.state)
  }
  
  renderAvatar(){
    if(this.props.currentUser.avatar)
      return (
        <div>
          <h3>(Sample of your Avatar)</h3>
          <AdultUserAvatar imgURL={this.props.currentUser.avatar} />
          <h3>(Generate as many times as you wish!)</h3>
        </div>
      )
    return null
  } 

  render() {
    return (
      <div >
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

export default connect(mapStateToProps, { 
  adultCreateAvatar,
  adultUserSignup 
})(AdultSignupForm)