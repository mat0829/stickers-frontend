import React from 'react'

const imgStyle = {
  maxWidth: '250px',
  maxHeight: '125px'
}

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const TaskImageInfo = (props) => (
  <div id="adult-task-image-info">
    <img
      style={imgStyle}
      src={props.imgURL}
      alt='taskImage'>
    </img><br />

    <button
      type="button"
      style={btnStyle}
      onClick={props.handleShowHideTaskImage}>
      Select a Different Task Image
    </button>
  </div>
)

export default TaskImageInfo