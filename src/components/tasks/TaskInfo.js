import React from 'react'
import {NavLink} from 'react-router-dom'

import ChildUserAvatar from '../users/childUsers/ChildUserAvatar'

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
  const history = props.history
  
  let taskStatusToggle
  task.completed === false ? taskStatusToggle = 'Completed' : taskStatusToggle = 'Not Completed'
  
  if (Object.keys(props.adultUser).length !== 0) {

    return (
      <div ref={props.refProp} id="adult-task-info">
        {(() => {
          if (task.completed && task.value === 0) {
            return (
              <>
                <h2>{task.task_child.name} collected the Points for: "{task.name}"!</h2>
                <ChildUserAvatar imgURL={task.task_child.avatar}/>

                <h2>{task.task_child.name} also added:</h2>

                <img 
                  src={task.stickerImage} 
                  alt="sticker" 
                  style={imgStyle}
                />

                <h2>to their Sticker Collection!</h2>
              </>
            )
          } 
          else if (task.completed) {
            return (
              <>
                <h2>{task.task_child.name} completed: "{task.name}"!</h2>

                <img 
                  src={task.image} 
                  alt="task img" 
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
              </>
            )
          }
          else {
            return (
              <>
                <h2 id="h2">{task.task_child.name} is currently working on: {task.name}</h2>
  
                <img 
                  src={task.image} 
                  alt="task img" 
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
              </>
            )
          }
        })()}

        <NavLink to={`/tasks/${task.id}/edit`}>
          <button
            type="button"
            style={btnStyle}>
              Edit this Task
          </button>
        </NavLink>

        <button
          type="button"
          onClick={() => props.handleMarkTaskComplete(props.task)}
          style={btnStyle}>
            Mark Task as {taskStatusToggle}
        </button>

        <button
          type="button"
          onClick={() => props.deleteTask(props.task.id, history)}
          style={btnStyle}>
            Delete this Task
        </button><br/><br/>

        <NavLink to="/tasks/new">
          <button
            type="button"
            style={btnStyle}>
              Create another new Task
          </button><br/><br/>
        </NavLink> 
  
        <button
          type="button"
          style={btnStyle}
          onClick={() => props.scrollToTop()}>
            Top of Page
        </button><br/><br/>
      </div>
    )
  } 
  else if (Object.keys(props.childUser).length !== 0) {
    return (
      <div ref={props.refProp} id="child-task-info">
        {(() => {
          if (task.completed && task.value === 0) {
            return (
              <>
                <h1>Congratulations {task.task_child.name}!</h1>
                <h2>You completed "{task.name}"!</h2>

                <ChildUserAvatar imgURL={task.task_child.avatar}/>

                <h2>You also added:</h2>

                <img 
                  src={task.stickerImage} 
                  alt="sticker" 
                  style={imgStyle}
                />

                <h2>to your Sticker Collection!</h2>

                <h4>~ Created by: {task.task_parent.name}</h4>
              </>
            )
          } 
          else if (task.completed) {
            return (
              <>
                <h2>You completed: "{task.name}"!</h2>

                <img 
                  src={task.image} 
                  alt="task img" 
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
                  type="button"
                  style={btnStyle}
                  onClick={() => props.collectStickerPoints(task, props.childUser, history)}>
                    Collect your points
                </button><br/><br/>
              </>
            )
          }
          else {
            return (
              <>
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
              </>
            )
          }
        })()}
        
        <button
          type="button"
          style={btnStyle}
          onClick={() => props.scrollToTop()}>
            Top of Page
        </button><br/><br/>
      </div>
    )
  }
}

export default TaskInfo