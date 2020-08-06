import React, { Component } from 'react'
import {connect} from 'react-redux'

import addNewTask from '../../actions/tasks/addNewTask'
import TaskImagesContainer from '../../containers/TaskImagesContainer'
import TaskImageInfo from '../taskImages/TaskImageInfo'
import StickersContainer from '../../containers/StickersContainer'
import StickerInfo from '../stickers/StickerInfo'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

class NewTaskForm extends Component {

  state = {
    taskGiverId: `${this.props.currentUser.id}`,
    taskReceiverId: '2',
    name: 'Test',
    image: '',
    value: '5',
    completed: false,
    stickerImage: '',
    showingTaskImageCollection: true,
    showingTaskImageInfo: false,
    showingStickerCollection: true,
    showingStickerInfo: false
  }

  componentDidMount() {
    this.scrollTo('new-task-form-container')
  }

  scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTaskClick = event => {
    event.preventDefault()
    const taskImage = event.target.src
    this.setState({
      image: taskImage
    })
    this.handleShowHideTaskImage()
  }

  handleShowHideTaskImage = () => {
    const {showingTaskImageCollection, showingTaskImageInfo} = this.state
    this.setState({
      showingTaskImageCollection: !showingTaskImageCollection, 
      showingTaskImageInfo: !showingTaskImageInfo
    })
  }

  handleStickerClick = event => {
    event.preventDefault()
    const sticker = event.target.src
    this.setState({
      stickerImage: sticker
    })
    this.handleShowHideSticker()
  }

  handleShowHideSticker = () => {
    const {showingStickerCollection, showingStickerInfo} = this.state
    this.setState({
      showingStickerCollection: !showingStickerCollection, 
      showingStickerInfo: !showingStickerInfo
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addNewTask(this.state)
  }

  render() {
    const {
      showingTaskImageCollection, 
      showingTaskImageInfo,
      showingStickerCollection,
      showingStickerInfo
    } = this.state
    return (
      <div id="new-task-form-container">
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

            {showingTaskImageCollection
              ? <TaskImagesContainer 
                  scrollTo={this.scrollTo} 
                  handleTaskClick={this.handleTaskClick}
                />
              : null
            }

            {showingTaskImageInfo
              ? <div>
                  <TaskImageInfo
                    imgURL={this.state.image}
                    handleShowHideTaskImage={this.handleShowHideTaskImage}
                  /><br/>
                </div>
              : null
            }

            {showingStickerCollection
              ? <StickersContainer
                  scrollTo={this.scrollTo}
                  handleStickerClick={this.handleStickerClick}
                />
              : null
            }

            {showingStickerInfo
              ? <div>
                  <StickerInfo
                    imgURL={this.state.stickerImage} 
                    handleShowHideSticker={this.handleShowHideSticker}
                  /><br/>
                </div>
              : null
            }

            <label htmlFor="new-task-value">Choose Task Sticker Value:</label>
              <select id="new-task-value" name="value" onChange={this.handleChange}>
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
              </select><br/><br/>

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