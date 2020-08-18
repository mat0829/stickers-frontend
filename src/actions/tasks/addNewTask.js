
const addNewTask = task => {
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
    fetch(`http://localhost:3000/api/v1/tasks`, {
      method: "POST",
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
    .then(newTaskData => {
      if (newTaskData.errors !== undefined) {
          console.log('create task errors:', newTaskData.errors)
          dispatch({
            type: 'TASKS ERRORS',
            payload: newTaskData.errors
          })
      } 
      else {
        console.log('new task:', newTaskData)
        dispatch({
          type: 'ADD_NEW_TASK',
          payload: newTaskData
        })
      }
    })
  }
}

export default addNewTask