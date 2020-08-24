import React, { Component } from 'react'

import TaskImagesContainer from '../../containers/TaskImagesContainer'
import TaskImageInfo from '../taskImages/TaskImageInfo'
import StickersContainer from '../../containers/StickersContainer'
import StickerInfo from '../stickers/StickerInfo'
import ErrorsContainer from '../../containers/ErrorsContainer'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

class EditTaskForm extends Component {

  state = {
    id: '',
    taskGiverId: ``,
    taskReceiverId: '',
    name: '',
    image: '',
    value: '',
    completed: '',
    stickerImage: '',
    showingTaskImageCollection: false,
    showingTaskImageInfo: true,
    showingStickerCollection: false,
    showingStickerInfo: true,
    currentErrors: null
  }

  componentDidMount() {
    const {
      id,
      taskGiverId, 
      taskReceiverId, 
      name,
      image,
      value,
      completed,
      stickerImage
    } = this.props.task

    this.setState({
      id,
      taskGiverId, 
      taskReceiverId, 
      name, 
      image, 
      value, 
      completed, 
      stickerImage
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        this.setState({
          currentErrors: this.props.errors
        })
      }
    }
    if (prevProps.tasks !== this.props.tasks) {
      this.props.handleShowHideEditForm()
    }
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
    const {
      showingTaskImageCollection, 
      showingTaskImageInfo
    } = this.state
    
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
    const history = this.props.history
    this.props.editTask(this.state, history)
  }

  renderEditTaskErrors = () => {
    const currentErrors = this.state.currentErrors
    if (currentErrors) {
      return (
        <ErrorsContainer
          errors={currentErrors}
        />
      )
    }
    else return null
  }

  render() {
    const {
      showingTaskImageCollection, 
      showingTaskImageInfo,
      showingStickerCollection,
      showingStickerInfo
    } = this.state

    const children = JSON.parse(localStorage.getItem("childNames"))
    
    return (
      <div id="edit-task-form-container">
        <h1>Edit Task</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="edit-task-child">
            Choose the Child the Task is for:
          </label>

          <select
            id="edit-task-child"
            name="taskReceiverId"
            value={this.state.taskReceiverId}
            onChange={this.handleChange}>
              <option>Select Name Here</option>
              {children.map(child =>
                <option key={child.id} value={child.id}>{child.name}</option>
              )}
          </select><br/><br/>

          <label htmlFor="edit-task-name">
            Task Name:
          </label>

          <input
            id="edit-task-name"
            name="name" 
            placeholder="Name Your Task Here"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="edit-task-image">
            Task Image URL:
          </label>

          <input
            id="edit-task-image"
            name="image" 
            placeholder="Manually Add Image Url"
            value={this.state.image}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          {showingTaskImageCollection
            ?  <TaskImagesContainer 
                 scrollTo={this.scrollTo} 
                 handleTaskClick={this.handleTaskClick}
               />
            :  null
          }

          {showingTaskImageInfo
            ?  <>
                <TaskImageInfo
                  imgURL={this.state.image}
                  handleShowHideTaskImage={this.handleShowHideTaskImage}
                /><br/>
              </>
            :  null
          }

          {this.renderEditTaskErrors()}

          {showingStickerCollection
            ?  <StickersContainer
                 scrollTo={this.scrollTo}
                 handleStickerClick={this.handleStickerClick}
               />
            :  null
          }

          {showingStickerInfo
            ?  <>
                 <StickerInfo
                   imgURL={this.state.stickerImage} 
                   handleShowHideSticker={this.handleShowHideSticker}
                 /><br/>
               </>
            :  null
          }

          <label htmlFor="edit-task-value">
            Choose Task Sticker Value:
          </label>

          <select 
            id="edit-task-value" 
            name="value" 
            onChange={this.handleChange}>
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
            value="Update Task">
          </input>
        </form>
      </div>
    )
  }
}

export default EditTaskForm