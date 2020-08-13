import React from 'react'
import {NavLink} from 'react-router-dom'

const imgStyle = {
  maxWidth: '250px',
  maxHeight: '125px'
}

const stickerImageStyle = {
  width: '150px',
  height: '150px'
}

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const TaskInfo = (props) => {
  const task = props.task
  return (
    <div id="adult-task-info">
      <h2 id="h2">{task.task_child.name} is currently working on: {task.name}</h2>

      <img 
        src={task.image} 
        alt="" 
        style={imgStyle}
      />

      <h4>~ Created by: {task.task_parent.name}</h4>
      <h2>Sticker Reward:</h2>

      <img 
        src={task.stickerImage} 
        alt="sticker"
        style={stickerImageStyle}
      />

      <h2>Value: {task.value} Sticker Points!</h2>

      <button
        onClick={props.handleShowHideEditForm}
        style={btnStyle}>
          Edit this Task!
      </button>

      <button
        onClick={() => props.handleDelete(props.task.id)}
        style={btnStyle}>
          Delete this Task!
      </button><br/><br/>

      <NavLink to="/add-new-task">
        <button 
          style={btnStyle}>
            Create another new Task
        </button><br/><br/>
      </NavLink> 
      
      <button 
        style={btnStyle}
        onClick={props.scrollToTop}>
          Top of Page
      </button><br/><br/>
    </div>
  )
}

export default TaskInfo