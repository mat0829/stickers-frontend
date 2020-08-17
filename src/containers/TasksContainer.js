import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchTasks from '../actions/tasks/fetchTasks'
import editTask from '../actions/tasks/editTask'
import deleteTask from '../actions/tasks/deleteTask'
import TasksCollection from '../components/tasks/TasksCollection'
import TaskInfo from '../components/tasks/TaskInfo'
import EditTaskForm from '../components/tasks/EditTaskForm'

const labelStyle = {
  fontSize: '35px'
}

const taskBarContainerStyle = {
  paddingTop: '20px'
}

class TasksContainer extends Component {

  state = {
    selectedTask: '',
    showingTaskInfo: false,
    showingEditTaskForm: false
  }

  componentDidMount() {
    this.props.fetchTasks()
    console.log('fetch tasks:', this.props.tasks)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks.length > 0 && prevProps.tasks !== this.props.tasks) {
      if (this.state.selectedTask !== undefined) {
        const taskId = this.state.selectedTask.id
        const tasks = this.props.tasks
        const newTask = tasks.find(task => task.id === taskId)
        this.setState({
          selectedTask: newTask
        })
      }
    }
    window.scrollTo({top: 1000, behavior: 'smooth'})
  }

  scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  handleClick = event => {
    const taskName = event.target.innerText
    const tasks = this.props.tasks
    const foundTask = tasks.find(task => task.name === taskName)
    this.setState({
      selectedTask: foundTask,
      showingTaskInfo: true,
      showingEditTaskForm: false
    })
  }

  handleShowHideEditForm = () => {
    const {showingTaskInfo, showingEditTaskForm} = this.state
    this.setState({
      showingTaskInfo: !showingTaskInfo,
      showingEditTaskForm: !showingEditTaskForm
    })
  }

  handleDelete = taskId => {
    this.props.deleteTask(taskId)
    this.setState({
      showingTaskInfo: false
    })
  }

  render() {
    const { showingTaskInfo, showingEditTaskForm } = this.state
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
            errors={this.props.errors}
          />

          {showingTaskInfo
            ?  <TaskInfo
                 adultUser={this.props.adultUser}
                 childUser={this.props.childUser}
                 handleShowHideEditForm={this.handleShowHideEditForm}
                 handleDelete={this.handleDelete}
                 task={this.state.selectedTask}
                 scrollToTop={this.scrollToTop}
               />
            :  null
          }

          {showingEditTaskForm
            ? <div>
                <EditTaskForm
                  handleEdit={this.props.editTask}
                  handleShowHideEditForm={this.handleShowHideEditForm}
                  task={this.state.selectedTask}
                />
              </div>
            : null
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    adultUser: state.adultUserReducer.currentUser,
    childUser: state.childUserReducer.currentUser,
    tasks: state.taskReducer.tasks,
    loading: state.taskReducer.loading,
    message: state.taskReducer.message,
    errors: state.taskReducer.errors
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  editTask,
  deleteTask
})(TasksContainer)