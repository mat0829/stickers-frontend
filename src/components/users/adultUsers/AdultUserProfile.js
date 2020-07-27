import React, { Component } from 'react'
import {connect} from 'react-redux'

class AdultUserProfile extends Component {
  render() {
    let childNames = []

    if (this.props.children !== 0) {
      this.props.children.forEach(function(child) {
        
      }) 
      childNames = 'You currently have 0 children.'
    }

    let tasksForChildren = []

    if (this.props.currentUser.parent_tasks !== 0) {
      this.props.parentTasks.forEach(function(task) {
        tasksForChildren.push(task)
      }) 
      tasksForChildren = 'You have created 0 tasks.'
    }
    
    return (
      <div>
        <h1>{this.props.currentUser.name}</h1>
        <img src={this.props.currentUser.avatar} alt='adult-avatar'></img><br />
        <button> Edit User {this.props.currentUser.name}</button>
        <button> Delete User {this.props.currentUser.name}</button><br /><br />
        <button> Save Current Avatar </button>
            
        <h1>Children:</h1>
        <li>{childNames}</li><br /><br />
        <button class="top">Top of Page</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.adultUserReducer.currentUser,
    parentTasks: state.adultUserReducer.currentUser.parent_tasks,
    children: state.adultUserReducer.currentUser.children
  }
}

export default connect(mapStateToProps)(AdultUserProfile)