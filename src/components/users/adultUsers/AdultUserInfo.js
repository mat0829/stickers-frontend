import React, { Component } from 'react'
import {connect} from 'react-redux'

import AdultEditUserForm from './AdultEditUserForm'
import adultUserDelete from '../../../actions/users/adultUsers/adultUserDelete'
import AdultUserAvatar from './AdultUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

class AdultUserInfo extends Component{
  state = {
    showingUserProfile: true,
    showingEditForm: false 
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  handleClick = () => {
    const {showingUserProfile, showingEditForm} = this.state
    this.setState({showingUserProfile: !showingUserProfile, 
        showingEditForm: !showingEditForm
    })
  }

  render() {
    const {showingUserProfile, showingEditForm} = this.state
    return (
      <div>
        {showingUserProfile
          ? <div id="adult-user-info"> 
              <h1>{this.props.currentUser.name}</h1>
              <AdultUserAvatar imgURL={this.props.currentUser.avatar}/>
              <button 
                onClick={this.handleClick}
                style={btnStyle}>
                Edit User {this.props.currentUser.name}
              </button>
              <button 
                onClick={() => this.props.adultUserDelete(this.props.currentUser.id)}
                style={btnStyle}> 
                Delete User {this.props.currentUser.name}
              </button><br /><br />
              <button style={btnStyle} onClick={this.scrollToTop}> Top of Page </button>
            </div>
          : null
        }
    
        {showingEditForm
          ? <div><AdultEditUserForm handleClick={this.handleClick}/></div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.adultUserReducer.currentUser
  }
}

export default connect(mapStateToProps, { adultUserDelete })(AdultUserInfo)