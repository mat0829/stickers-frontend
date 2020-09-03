import React from 'react'
import Error from '../errors/Error'
import {Link } from 'react-router-dom'
import TaskVoteButton from './TaskVoteButton'

const taskBarStyle = {
  height: 'auto',
  background: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
  display: 'flex',
  flexWrap: 'wrap',
  width: 'auto',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

const imgStyle = {
  maxWidth: '150px',
  maxHeight: '75px'
}

const linkStyle = {
  fontSize: '20px',
  height: '80%',
  width: '10vw',
  display: 'flex',
  justifyContent: 'center',
  margin: '5px',
  alignItems: 'center',
  borderRadius: '1rem',
  border: '2px solid black',
  textDecoration: 'none',
  color: 'inherit'
}

const Tasks = (props) => {
  
  const renderTasks = () => {
    if (props.tasks.length !== 0) {
      return props.tasks.map(task =>
        <div key={task.id}>
        <Link key={task.id} to={`/tasks/${task.id}`} style={linkStyle}>
          <span id={task.id}>
            {task.name}
            <img 
              src={task.image} 
              alt="sticker" 
              style={imgStyle}
            />
            {task.task_child.name}
          </span>
        </Link>
        <TaskVoteButton />
        </div>)
    } 
    else return <h2>You Currently have 0 Tasks.</h2>
  }

  return (
    <div 
      id='task-bar' 
      style={taskBarStyle}>
        {props.loading
          ?  <h1>"Loading..."</h1> 
          :  renderTasks()
        }
        {props.errorMessage
          ? <Error />
          : null
        }
    </div>
 )
}

export default Tasks