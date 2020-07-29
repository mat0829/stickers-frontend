import React, { Component } from 'react'
import {connect} from 'react-redux'

import AdultEditUserForm from './AdultEditUserForm'
import userDeleteFetch from '../../../actions/users/adultUsers/userDeleteFetch'

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
              <img src={this.props.currentUser.avatar} alt='adult-avatar'></img><br />
              <button 
                onClick={() => this.setState({showingUserProfile: !showingUserProfile, 
                showingEditForm: !showingEditForm })}>Edit User {this.props.currentUser.name}
              </button>
              <button onClick={() => this.props.userDeleteFetch(this.props.currentUser.id)}> 
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
  userDeleteFetch: userId => dispatch(userDeleteFetch(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdultUserInfo)