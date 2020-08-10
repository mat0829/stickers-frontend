import React from 'react'

const taskImageBarStyle = {
  background: 'black',
  display: 'block',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const spanStyle = {
  padding: '1vw',
  display: 'inline-block'
}

const taskImageStyle = {
  width:  '150px',
  height: '75px'
}

const TaskImagesCollection = (props) => {

  const renderTaskImages = () => {
    return props.taskImages.map(taskImage => 
      <span 
        key={taskImage.id} 
        style={spanStyle}>
          <img 
            src={taskImage.imageUrl} 
            alt={`taskImage ${taskImage.id}`}
            onClick={props.handleTaskClick}
            style={taskImageStyle}>
          </img>
      </span>)
  }

  return (
    <div 
      id='adult-task-image-bar' 
      style={taskImageBarStyle}>
        {props.loading 
          ?  <h1>"Loading..."</h1> 
          :  renderTaskImages()
        }
    </div>
  )
}

export default TaskImagesCollection