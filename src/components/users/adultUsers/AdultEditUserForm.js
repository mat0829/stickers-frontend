import React, { Component } from 'react'
import {connect} from 'react-redux'

import adultUserUpdate from '../../../actions/users/adultUsers/adultUserUpdate'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class AdultEditUserForm extends Component {

  state = {
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: ''
  } 

  componentDidMount() {
    const {id, name, email, avatar} = this.props.currentUser
    this.setState({id, name, email, avatar})
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.adultUserUpdate(this.state)
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <h2>Edit Adult User:</h2>
        <form onSubmit={this.handleSubmit} style={{paddingBottom: "2vw"}}>
          
          <label htmlFor="adult-edit-user-name">Name:</label>
          <input  
            name="name" 
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="adult-edit-user-email">Email:</label>
          <input 
            name="email" 
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="adult-edit-user-password">Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter old or new password:"
            value={this.state.password}
            onChange={this.handleChange}>
          </input><br/><br/>

          <label htmlFor="adult-edit-user-avatar">Avatar Image URL:</label>
          <input
            name="avatar" 
            value={this.state.avatar}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <input
            style={submitBtnStyle}
            type="submit" 
            value="Update User">
          </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.adultUserReducer.currentUser
  }
}

export default connect(mapStateToProps, { adultUserUpdate })(AdultEditUserForm)