import React, { Component } from 'react'
import {connect} from 'react-redux'

import addNewTask from '../../actions/tasks/addNewTask'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

class NewTaskForm extends Component {

  state = {
    taskGiverId: '1',
    taskReceiverId: '2',
    name: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTareRMaMfcc1mZ9V2HZOco4EW_Nv-CoSZAg&usqp=CAU',
    value: '',
    completed: false,
    stickerImage: 'https://i.imgur.com/VEt4BPW.png'
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addNewTask(this.state)
  }

  render() {
    return (
      <div>
        <h1>Create a new Task</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-task-name">Task Name:</label>
            <input
              id="new-task-name"
              name="name" 
              placeholder="Name Your Task Here"
              value={this.state.name}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="new-task-image">Task Image URL:</label>
            <input
              id="new-task-image"
              name="image" 
              placeholder="Manually Add Image Url"
              value={this.state.image}
              onChange={this.handleChange}
              autoComplete="off">
            </input><br/><br/>

            <label htmlFor="new-task-value">Choose Task Sticker Value:</label>
              <select id="new-task-value" name="value" value={this.state.value} onChange={this.handleChange}>
                <option value="5">5 Sticker Points</option>
                <option value="10">10 Sticker Points</option>
                <option value="20">20 Sticker Points</option>
                <option value="25">25 Sticker Points</option>
                <option value="50">50 Sticker Points</option>
                <option value="75">75 Sticker Points</option>
                <option value="100">100 Sticker Points</option>
                <option value="250">250 Sticker Points</option>
                <option value="500">500 Sticker Points</option>
                <option value="750">750 Sticker Points</option>
                <option value="1000">1000 Sticker Points</option>
              </select><br /><br />

              <input
                style={submitBtnStyle}
                type="submit" 
                value="Create Task">
              </input>
            </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.adultUserReducer.currentUser
  }
}

export default connect(mapStateToProps, { addNewTask })(NewTaskForm)