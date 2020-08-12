import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchTasks from '../actions/tasks/fetchTasks'
import deleteTask from '../actions/tasks/deleteTask'
import TasksCollection from '../components/tasks/TasksCollection'
import TaskInfo from '../components/tasks/TaskInfo'

const labelStyle = {
  fontSize: '35px'
}

const taskBarContainerStyle = {
  paddingTop: '20px'
}

class TasksContainer extends Component {

  state = {
    selectedTask: '',
    showingTaskInfo: false
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  scrollToBottom = () => {
    window.scrollTo({top: 1000, behavior: 'smooth'})
  }

  scrollTo(id) {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  handleClick = event => {
    const taskName = event.target.innerText
    const tasks = this.props.tasks
    const foundTask = tasks.find(task => task.name === taskName)
    this.setState({
      selectedTask: foundTask,
      showingTaskInfo: true
    })
  }

  handleDelete = taskId => {
    this.props.deleteTask(taskId)
    this.setState({
      showingTaskInfo: false
    })
  }

  render() {
    const { showingTaskInfo } = this.state
    return (
      <div 
        id='adult-tasks-container' 
        style={taskBarContainerStyle}>
          
          <label 
            htmlFor="adult-task-bar" 
            style={labelStyle}>
              Click on a Task to see more details:
          </label>

          <TasksCollection 
            tasks={this.props.tasks} 
            handleClick={this.handleClick}
            loading={this.props.loading}
          />

          {showingTaskInfo
            ?  <TaskInfo
                 handleDelete={this.handleDelete}
                 task={this.state.selectedTask}
                 scrollToTop={this.scrollToTop}
               />
            :  null
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    loading: state.taskReducer.loading
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  deleteTask
})(TasksContainer)