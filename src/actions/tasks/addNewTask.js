const addNewTask = task => {
  const token = localStorage.token
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/tasks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({task})
    })
    .then(resp => resp.json())
    .then(newTaskData => {
      if (newTaskData.errors !== undefined) {
          console.log(newTaskData.errors)
          alert(newTaskData.errors)
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } else {
        console.log(newTaskData)
        dispatch({
          type: 'ADD_NEW_TASK',
          task: newTaskData
        })
      }
    })
  }
}

export default addNewTask