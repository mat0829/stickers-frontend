const editTask = (task, history) => {
  const {
    taskGiverId, 
    taskReceiverId, 
    name, 
    value, 
    image, 
    completed, 
    stickerImage
  } = task
  
  const token = localStorage.token
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        taskGiverId: taskGiverId,
        taskReceiverId: taskReceiverId,
        name: name,
        value: value,
        image: image,
        completed: completed,
        stickerImage: stickerImage
      })
    })
    .then(resp => resp.json())
    .then(updatedTaskData => {
      if (updatedTaskData.errors !== undefined) {
          console.log(updatedTaskData.errors)
          dispatch({
            type: 'TASK_ERRORS',
            payload: updatedTaskData.errors
          })
      } 
      else {
        console.log('updated task:', updatedTaskData)
        dispatch({
          type: 'UPDATE_TASK',
          payload: updatedTaskData
        })
        history.push(`/tasks/${updatedTaskData.id}`)
      }
    })
  }
}

export default editTask