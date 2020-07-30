import React, { Component } from 'react'
import {connect} from 'react-redux'

import AdultEditUserForm from './AdultEditUserForm'
import adultUserDelete from '../../../actions/users/adultUsers/adultUserDelete'
import AdultUserAvatar from './AdultUserAvatar'

class AdultUserInfo extends Component{
  state = {
    showingUserProfile: true,
    showingEditForm: false 
  }

  render() {
    const {showingUserProfile, showingEditForm} = this.state
    return (
      <div>
        {showingUserProfile
          ? <div> 
              <h1>{this.props.currentUser.name}</h1>
              <AdultUserAvatar imgURL={this.props.currentUser.avatar}/>
              <button 
                onClick={() => this.setState({showingUserProfile: !showingUserProfile, 
                showingEditForm: !showingEditForm })}>
                Edit User {this.props.currentUser.name}
              </button>
              <button 
                onClick={() => this.props.adultUserDelete(this.props.currentUser.id)}> 
                Delete User {this.props.currentUser.name}
              </button><br /><br />
              <button> Save Current Avatar </button>
            </div>
          : null
        }
    
        {showingEditForm
          ? <div><AdultEditUserForm /></div>
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

const mapDispatchToProps = dispatch => ({
  adultUserDelete: userId => dispatch(adultUserDelete(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdultUserInfo)