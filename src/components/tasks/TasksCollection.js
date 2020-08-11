import React from 'react'

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
    return props.tasks.map(task => 
        <span 
          key={task.id}
          id={task.id}
          onClick={props.handleClick}
          style={spanStyle}>
            {task.name}
        </span>)
  }


   return (
    <div 
      id='adult-task-bar' 
      style={taskBarStyle}>
        {props.loading 
          ?  <h1>"Loading..."</h1> 
          :  renderTasks()
        }
    </div>
  )
}

export default TasksCollection