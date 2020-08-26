import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import addNewTask from '../../actions/tasks/addNewTask'
import TaskImagesContainer from '../../containers/TaskImagesContainer'
import TaskImageInfo from '../taskImages/TaskImageInfo'
import StickersContainer from '../../containers/StickersContainer'
import StickerInfo from '../stickers/StickerInfo'
import ErrorsContainer from '../../containers/ErrorsContainer'

const submitBtnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

class NewTaskForm extends Component {

  state = {
    taskGiverId: `${this.props.currentUser.id}`,
    taskReceiverId: '',
    name: '',
    image: '',
    value: '5',
    completed: false,
    stickerImage: '',
    showingTaskImageCollection: true,
    showingTaskImageInfo: false,
    showingStickerCollection: true,
    showingStickerInfo: false,
    redirect: false,
    currentErrors: null,
  }

  componentDidMount() {
    this.props.scrollToMyRef()
    this.setState({
      showingTaskImageCollection: true, 
      showingStickerCollection: true
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
      this.setState({
        redirect: true
      })
    }
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
    this.props.addNewTask(this.state, history)
  }

  renderCreateTaskErrors = () => {
    const currentErrors = this.state.currentErrors
    if (currentErrors) {
      return (
        <ErrorsContainer
          errors={this.props.errors}
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
      showingStickerInfo,
      redirect
    } = this.state

    const children = JSON.parse(localStorage.getItem("childNames"))
    
    if (redirect) return <Redirect to='/adult-tasks'/>

    else return (
      <div ref={this.props.refProp} id="new-task-form-container">
        <h1>Create a new Task</h1>
        <form onSubmit={this.handleSubmit}>
       
        <label htmlFor="new-task-child">
          Choose the Child the Task is for:
        </label>

        <select
          id="new-task-child"
          name="taskReceiverId"
          onChange={this.handleChange}>
            <option>Select Name Here</option>
            {children.map(child =>
              <option key={child.id} value={child.id}>{child.name}</option>
            )}
        </select><br/><br/>

          <label htmlFor="new-task-name">
            Task Name:
          </label>

          <input
            id="new-task-name"
            name="name" 
            placeholder="Name Your Task Here"
            value={this.state.name}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          <label htmlFor="new-task-image">
            Task Image URL:
          </label>

          <input
            id="new-task-image"
            name="image" 
            placeholder="Manually Add Image Url"
            value={this.state.image}
            onChange={this.handleChange}
            autoComplete="off">
          </input><br/><br/>

          {showingTaskImageCollection
            ?  <TaskImagesContainer
                 refProp={this.props.refProp}
                 scrollToMyRef={this.props.scrollToMyRef}
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

          {this.renderCreateTaskErrors()}

          {showingStickerCollection
            ?  <StickersContainer
                 refProp={this.props.refProp}
                 scrollToMyRef={this.props.scrollToMyRef}
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

          <label htmlFor="new-task-value">
            Choose Task Sticker Value:
          </label>

          <select 
            id="new-task-value" 
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
            value="Create Task">
          </input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.adultUserReducer.currentUser,
    tasks: state.taskReducer.tasks,
    errors: state.taskReducer.errors
  }
}

export default connect(mapStateToProps, { addNewTask })(NewTaskForm)