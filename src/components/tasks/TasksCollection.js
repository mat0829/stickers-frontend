import React from 'react'

const taskBarStyle = {}

const spanStyle = {
  fontSize: '20px',
  height: '80%',
  width: '10vw',
  display: 'flex',
  justifyContent: 'center',
  margin: '5px',
  alignItems: 'center',
  borderRadius: '1 rem',
  border: '2px solid black'
}

const TasksCollection = (props) => {

  const renderTasks = () => {
    return props.tasks.map(task => 
        <span 
          key={task.id} 
          style={spanStyle}>
            <img 
              src={task.name} 
              alt={`task ${task.id}`}
              onClick={props.handleTaskClick}>
            </img>
        </span>)
  }


   return (
    <div 
      id='adult-task-image-bar' 
      style={taskBarStyle}>
        {props.loading 
          ?  <h1>"Loading..."</h1> 
          :  renderTasks()
        }
    </div>
  )
}

export default TasksCollection