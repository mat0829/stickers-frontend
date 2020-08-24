import React, { Component } from 'react'
import {connect} from 'react-redux'

import ChildUserAvatar from '../../../components/users/childUsers/ChildUserAvatar'
import ErrorsContainer from '../../../containers/ErrorsContainer'

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
    avatar: '',
    currentErrors: null
  } 

  componentDidMount() {
    const {
      id, 
      name, 
      email, 
      avatar
    } = this.props.childUser
    this.setState({id, name, email, avatar})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        this.setState({
          currentErrors: this.props.errors
        })
      }
    }
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

  handleSubmit = event => {
    event.preventDefault()
    const history = this.props.history
    this.props.childUserUpdate(this.state, history)
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

  renderUpdateErrors = () => {
    const currentErrors = this.state.currentErrors
    if (currentErrors) {
      return (
        <ErrorsContainer
          errors={this.props.errors}
        />
      )
    }
    else return null
  }

  render() {
    return (
      <div>
        <h2>Edit User:</h2>
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

            {this.renderUpdateErrors()}

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
    errors: state.childUserReducer.errors
  }
}

export default connect(mapStateToProps)(ChildEditUserForm)