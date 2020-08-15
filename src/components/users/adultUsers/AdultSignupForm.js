import React, {Component} from 'react'
import {connect} from 'react-redux'

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
    avatar: 'https://cataas.com/cat/595f2810557291a9750ebfdc'
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
    this.props.adultUserSignup(this.state)
  }
  
  renderAvatar(){
    if(this.state.avatar !== '')
      return (
        <div>
          <h3>(Sample of your Avatar)</h3>
          <AdultUserAvatar imgURL={this.state.avatar} />
          <h3>(Generate as many times as you wish!)</h3>
        </div>
      )
    return null
  } 

  render() {
    return (
      <div >
        <h2>New Adult User:</h2>
        <form 
          onSubmit={this.handleSubmit} 
          style={{paddingBottom: "2vw"}}>
          
            <label htmlFor="adult-new-user-name">
              Name:
            </label>

            <input
              id="adult-new-user-name"
              name="name" 
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="adult-new-user-email">
              Email:
            </label>

            <input
              id="adult-new-user-email"
              name="email" 
              placeholder="Enter Your Email Address"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="adult-new-user-password">
              Password:
            </label>

            <input
              id="adult-new-user-password"
              type="password" 
              name="password" 
              placeholder="Create a Password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input><br/><br/>

           <label htmlFor="adult-new-user-avatar">
             Avatar Image URL:
           </label>

            <input
              id="adult-new-user-avatar"
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
    currentUser: state.adultUserReducer.currentUser
  }
}

export default connect(mapStateToProps, { adultUserSignup })(AdultSignupForm)