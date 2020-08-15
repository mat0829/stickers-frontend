import React, { Component } from 'react'
import {connect} from 'react-redux'

import childUserUpdate from '../../../actions/users/childUsers/childUserUpdate'
import ChildUserAvatar from './ChildUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, #b827fc, #2c90fc, #b8fd33)'
}

class ChildEditUserForm extends Component {

  state = {
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: ''
  } 

  componentDidMount() {
    const {
      id, 
      name, 
      email, 
      avatar
    } = this.props.currentUser

    this.setState({id, name, email, avatar})
  }

  avatarGenerator = () => {
    let userChoice
    let avatar
    const robotNumber = Math.floor((Math.random() * 1000) + 1)
    const catNumber = Math.floor((Math.random() * 415) + 1)
    const dogNumber = Math.floor((Math.random() * 100) + 1)
    const monsterNumber = Math.floor((Math.random() * 750) + 1)
  
    userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
    
    if (userChoice === 'Robot' || userChoice === 'robot') {
      avatar = `https://robohash.org/Random-Robot-Avatar${robotNumber}.png` // Generates a random Robot avatar
    } else if (userChoice === 'Cat' || userChoice === 'cat') {
      avatar = `https://cataas.com/cat?${catNumber}` // Generates a random Cat avatar
    } else if (userChoice === 'Dog' || userChoice === 'dog') {
      avatar = `https://placedog.net/500/280/?id=${dogNumber}` // Generates a random Dog avatar
    } else if (userChoice === 'Monster' || userChoice === 'monster') {
      avatar = `https://api.adorable.io/avatars/200/${monsterNumber}.png` // Generates a random Monster avatar
    } else {
      avatar = `http://loremflickr.com/320/240/${userChoice}` // Generates an avatar based on the word given
    }
  
    return (
      avatar
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = event => {
    event.preventDefault()
    this.setState({
      avatar: this.avatarGenerator()
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.childUserUpdate(this.state)
    this.props.handleClick()
  }

  renderAvatar(){
    return (
      <div>
        <h3>(Your Current Avatar)</h3>
        <ChildUserAvatar imgURL={this.state.avatar} />
        <h3>(Generate as many times as you wish!)</h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Edit child User:</h2>
        <form 
          onSubmit={this.handleSubmit} 
          style={{paddingBottom: "2vw"}}>
          
            <label htmlFor="child-edit-user-name">
              Name:
            </label>

            <input
              id="child-edit-user-name"
              name="name" 
              value={this.state.name}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="child-edit-user-email">
              Email:
            </label>

            <input
              id="child-edit-user-email"
              name="email" 
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="child-edit-user-password">
              Password:
            </label>

            <input
              id="child-edit-user-password"
              type="password" 
              name="password" 
              placeholder="Enter old or new password:"
              value={this.state.password}
              onChange={this.handleChange}>
            </input><br/><br/>

            <label htmlFor="child-edit-user-avatar">
              Avatar Image URL:
            </label>

            <input
              id="child-edit-user-avatar"
              name="avatar" 
              value={this.state.avatar}
              onChange={this.handleChange}
              autoComplete="off">
            </input>

            {this.props.renderUpdateErrors()}

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
              value="Update User">
            </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.childUserReducer.currentUser
  }
}

export default connect(mapStateToProps, { childUserUpdate })(ChildEditUserForm)