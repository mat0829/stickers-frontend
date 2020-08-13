const editTask = task => {
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
          alert(updatedTaskData.errors)
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } 
      else {
        console.log('updated task:', updatedTaskData)
        dispatch({
          type: 'UPDATE_TASK',
          payload: updatedTaskData
        })
      }
    })
  }
}

export default editTask