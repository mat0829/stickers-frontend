import React, { Component } from 'react'
import {connect} from 'react-redux'

import TaskImagesCollection from '../components/taskImages/TaskImagesCollection'
import fetchTaskImages from '../actions/taskImages/fetchTaskImages'

const labelStyle = {
  fontSize: '35px'
}

const taskImageBarContainerStyle = {
  height: 'auto',
  width: 'auto',
  textAlign: 'center',
  padding: '5px'
}

class TaskImagesContainer extends Component {

  componentDidMount() {
    this.props.fetchTaskImages()
  }

  render() {
    return (
      <div id='adult-task-image-bar-container' style={taskImageBarContainerStyle}>
        <label htmlFor="adult-task-image-bar" style={labelStyle}>Click to Select a Task Image:</label>
        <TaskImagesCollection 
          taskImages={this.props.taskImages} 
          handleTaskClick={this.props.handleTaskClick}
          loading={this.props.loading}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    taskImages: state.taskImageReducer.taskImages,
    loading: state.taskImageReducer.loading
  }
}

export default connect(mapStateToProps, { fetchTaskImages })(TaskImagesContainer)