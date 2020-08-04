import React, { Component } from 'react'
import {connect} from 'react-redux'

import TaskImagesCollection from '../components/taskImages/TaskImagesCollection'
import fetchTaskImages from '../actions/taskImages/fetchTaskImages'

const taskImageBarContainerStyle = {
  height: '75vh',
  textAlign: 'center'
}

class TaskImagesContainer extends Component {

  componentDidMount() {
    this.props.fetchTaskImages()
  }

  render() {
    return (
      <div id='adult-task-image-bar-container' style={taskImageBarContainerStyle}>
        <TaskImagesCollection taskImages={this.props.taskImages} loading={this.props.loading}/>
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