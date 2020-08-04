import React, { Component } from 'react'

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

class TaskImagesCollection extends Component {

  renderTaskImages = () => {
    return this.props.taskImages.map(taskImage => 
      <span key={taskImage.id} style={spanStyle}>
        <img src={taskImage.imageUrl} alt={`taskImage ${taskImage.id}`} style={taskImageStyle}></img>
      </span>)
  }

  render() {
    return (
      <div id='adult-taskImage-bar' style={taskImageBarStyle}>
        {this.props.loading ?  <h1>"Loading..."</h1> : this.renderTaskImages()}
      </div>
    )
  }
}

export default TaskImagesCollection