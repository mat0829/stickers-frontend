import React from 'react'
import Errors from '../errors/Errors'
import Error from '../errors/Error'

const taskBarStyle = {
  height: '25vh',
  background: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
  display: 'flex',
  width: 'auto',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const spanStyle = {
  fontSize: '20px',
  height: '80%',
  width: '10vw',
  display: 'flex',
  justifyContent: 'center',
  margin: '5px',
  alignItems: 'center',
  borderRadius: '1rem',
  border: '2px solid black'
}

const TasksCollection = (props) => {
  const renderTasks = () => {
    if (props.tasks.length === 0) {
      return <h2>You Currently have 0 Tasks.</h2>
    } else {
      return props.tasks.map(task => 
        <span
          key={task.id}
          id={task.id}
          onClick={props.handleClick}
          style={spanStyle}>
            {task.name}
        </span>)
    }
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
        {props.errors
          ? <h2><Errors errors={props.errors}/></h2>
          : null
        }
    </div>
  )
}

export default TasksCollection