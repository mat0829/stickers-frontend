import React, { Component } from 'react'
import {connect} from 'react-redux'

import ChildEditUserForm from './ChildEditUserForm'
import childUserDelete from '../../../actions/users/childUsers/childUserDelete'
import AdultUserAvatar from '../../../components/users/adultUsers/AdultUserAvatar'

class ChildUserInfo extends Component{
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
                onClick={() => this.props.childUserDelete(this.props.currentUser.id)}> 
                Delete User {this.props.currentUser.name}
              </button><br /><br />
              <button> Save Current Avatar </button>
            </div>
          : null
        }
    
        {showingEditForm
          ? <div><ChildEditUserForm /></div>
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.childUserReducer.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  childUserDelete: userId => dispatch(childUserDelete(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildUserInfo)