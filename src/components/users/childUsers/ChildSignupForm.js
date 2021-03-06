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
    email: '',
    password: '',
    avatar: ''
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
    this.props.childCreateAvatar()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.childUserSignup(this.state)
  }
  
  renderAvatar(){
    if(this.state.avatar)
      return (
        <div>
          <h3>(Sample of your Avatar)</h3>
          <ChildUserAvatar imgURL={this.state.avatar} />
          <h3>(Generate as many times as you wish!)</h3>
        </div>
      )
    return null
  } 

  render() {
    return (
      <div>
        <h2>New child User:</h2>
        <form 
          onSubmit={this.handleSubmit} 
          style={{paddingBottom: "2vw"}}>
          
            <label htmlFor="child-new-user-name">
              Name:
            </label>

            <input
              id="child-new-user-name"
              name="name" 
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="child-new-user-email">
              Email:
            </label>

            <input
              id="child-new-user-email"
              name="email" 
              placeholder="Enter Your Email Address"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="child-new-user-password">
              Password:
            </label>

            <input
              id="child-new-user-password"
              type="password" 
              name="password" 
              placeholder="Create a Password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input><br/><br/>

            <label htmlFor="child-new-user-avatar">
              Avatar Image URL:
            </label>

            <input
              id="child-new-user-avatar"
              name="avatar" 
              placeholder="Add your own or --->"
              value={this.state.avatar}
              onChange={this.handleChange}
              autoComplete="off">
            </input>
          
            {this.renderAvatar()}
          
            <button
              type="button"
              onClick={this.handleClick}
              style={btnStyle}>
                Generate an Avatar
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

export default connect(mapStateToProps, { 
  childCreateAvatar, 
  childUserSignup
})(ChildSignupForm)