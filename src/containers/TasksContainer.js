import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchTasks from '../actions/tasks/fetchTasks'
import sortTasks from '../actions/tasks/sortTasks'
import editTask from '../actions/tasks/editTask'
import markTaskComplete from '../actions/tasks/markTaskComplete'
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

  handleMarkTaskComplete = task => {
    task.completed = !task.completed
    this.props.markTaskComplete(task)
  }

  handleDelete = taskId => {
    this.props.deleteTask(taskId)
    this.setState({
      showingTaskInfo: false
    })
  }

  render() {
    const { showingTaskInfo, showingEditTaskForm } = this.state
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
        </select><br/><br/>

          {showingTaskInfo
            ?  <TaskInfo
                 path={`${this.props.match.url}/${this.state.selectedTask.id}`}
                 adultUser={this.props.adultUser}
                 childUser={this.props.childUser}
                 handleShowHideEditForm={this.handleShowHideEditForm}
                 handleMarkTaskComplete={this.handleMarkTaskComplete}
                 handleDelete={this.handleDelete}
                 task={this.state.selectedTask}
                 scrollToTop={this.scrollToTop}
               />
            :  null
          }

          {showingEditTaskForm
            ? <div>
                <EditTaskForm
                  editTask={this.props.editTask}
                  handleShowHideEditForm={this.handleShowHideEditForm}
                  task={this.state.selectedTask}
                  errors={this.props.errors}
                  tasks={this.props.tasks}
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
  sortTasks,
  editTask,
  markTaskComplete,
  deleteTask
})(TasksContainer)