import React, { Component } from 'react'
import {connect} from 'react-redux'

import fetchTasks from '../actions/tasks/fetchTasks'
import TasksCollection from '../components/tasks/TasksCollection'

class TasksContainer extends Component {
  
  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    return (
      <div id="adult-task-bar-container">
        <TasksCollection
          tasks={this.props.tasks}
          loading={this.props.loading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}

export default connect(mapStateToProps, { fetchTasks })(TasksContainer)