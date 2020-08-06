import React, { Component } from 'react'
import {connect} from 'react-redux'

import ChildEditUserForm from './ChildEditUserForm'
import childUserDelete from '../../../actions/users/childUsers/childUserDelete'
import AdultUserAvatar from '../../../components/users/adultUsers/AdultUserAvatar'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

class ChildUserInfo extends Component{
  
  state = {
    showingUserProfile: true,
    showingEditForm: false 
  }

  handleClick = () => {
    const {showingUserProfile, showingEditForm} = this.state
    this.setState({
      showingUserProfile: !showingUserProfile, 
      showingEditForm: !showingEditForm
    })
  }

  render() {
    const {
      showingUserProfile, 
      showingEditForm
    } = this.state

    return (
      <div>
        {showingUserProfile
          ?  <div id='child-user-info'> 
               <h1>{this.props.currentUser.name}</h1>
               <AdultUserAvatar imgURL={this.props.currentUser.avatar}/>

               <button 
                 onClick={this.handleClick}
                 style={btnStyle}>
                   Edit User {this.props.currentUser.name}
               </button>

               <button 
                 onClick={() => this.props.childUserDelete(this.props.currentUser.id)}
                 style={btnStyle}>
                   Delete User {this.props.currentUser.name}
               </button><br /><br />

               <button style={btnStyle}> 
                 Top of Page
                </button>
             </div>
          :  null
        }
    
        {showingEditForm
          ?  <ChildEditUserForm handleClick={this.handleClick}/>
          :  null
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

export default connect(mapStateToProps, { childUserDelete })(ChildUserInfo)