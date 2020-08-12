const editTask = task => {
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
          alert(updatedTaskData.errors)
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } 
      else {
        console.log(updatedTaskData)
        dispatch({
          type: 'UPDATE_TASK',
          payload: updatedTaskData
        })
      }
    })
  }
}

export default editTask