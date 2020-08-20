const markTaskComplete = task => {
  const token = localStorage.token
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({task})
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
        let completedStatus
        updatedTaskData.completed === true ? completedStatus = 'completed' : completedStatus = 'not completed'
        console.log(`task: "${updatedTaskData.name}" marked as "${completedStatus}":`, updatedTaskData)
        dispatch({
          type: 'UPDATE_TASK',
          payload: updatedTaskData
        })
      }
    })
  }
}

export default markTaskComplete