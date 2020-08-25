import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchTasks from '../actions/tasks/fetchTasks'
import sortTasks from '../actions/tasks/sortTasks'
import editTask from '../actions/tasks/editTask'
import TasksCollection from '../components/tasks/TasksCollection'

const labelStyle = {
  fontSize: '35px'
}

const taskBarContainerStyle = {
  paddingTop: '20px'
}

class TasksContainer extends Component {

  state = {
    selectedTask: ''
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  handleClick = event => {
    const taskName = event.target.innerText
    const tasks = this.props.tasks
    const foundTask = tasks.find(task => task.name === taskName)
    this.setState({
      selectedTask: foundTask
    })
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
    const children = JSON.parse(localStorage.getItem("childNames"))
    return (
      <div 
        id='tasks-container' 
        style={taskBarContainerStyle}>
          
          <label 
            htmlFor="task-bar" 
            style={labelStyle}>
              Click on a Task to see more details:
          </label>

          <TasksCollection
            tasks={this.props.tasks}
            handleClick={this.handleClick}
            loading={this.props.loading}
            message={this.props.message}
            history={this.props.history}
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