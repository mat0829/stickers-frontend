import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchTasks from '../actions/tasks/fetchTasks'
import sortTasks from '../actions/tasks/sortTasks'
import editTask from '../actions/tasks/editTask'
import Tasks from '../components/tasks/Tasks'

const labelStyle = {
  fontSize: '35px'
}

const taskBarContainerStyle = {
  paddingTop: '20px'
}

class TasksContainer extends Component {

  componentDidMount() {
    this.props.fetchTasks()
  }

  handleTaskSorting = (event) => {
    this.setState({
      showingTaskInfo: false
    })
    if (event.target.value === 'Show all Tasks') {
      this.props.fetchTasks()
    } else {
      let childName = event.target.value
      this.props.sortTasks(childName)
    }
  }

  render() {
    const adultLoggedIn = this.props.adultLoggedIn
    if (adultLoggedIn) {
      const children = JSON.parse(localStorage.getItem("childNames"))

      if (children !== null) {
        return (
          <div 
            id='adult-tasks-container' 
            style={taskBarContainerStyle}>
              
              <label 
                htmlFor="task-bar" 
                style={labelStyle}>
                  Click on a Task to see more details:
              </label>
    
              <Tasks
                tasks={this.props.tasks}
                loading={this.props.loading}
                message={this.props.message}
              />
              
              <label htmlFor="task-child">
                Sort by a Child:
              </label>
    
            <select
              id="task-child"
              onChange={this.handleTaskSorting}>
                <option>Show all Tasks</option>
                {children.map(child =>
                  <option key={child.id}>{child.name}</option>
                )}
            </select>
          </div>
        )
      }
      else return <h2>Help your Child(ren) make a User(s) to start making Tasks.</h2>
    }
    else {
      return (
        <div 
          id='child-tasks-container' 
          style={taskBarContainerStyle}>
            
            <label 
              htmlFor="task-bar" 
              style={labelStyle}>
                Click on a Task to see more details:
            </label>
  
            <Tasks
              tasks={this.props.tasks}
              loading={this.props.loading}
              message={this.props.message}
            />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    loading: state.taskReducer.loading,
    message: state.taskReducer.message,
    errors: state.taskReducer.errors
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  sortTasks,
  editTask
})(TasksContainer)