const fetchTasks = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      fetch("http://localhost:3000/api/v1/tasks", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(tasksData => {
        if (tasksData === null) {
          dispatch({
            type: 'TASK_ERROR',
            payload: "You Currently have 0 Tasks."
          })
        }
        else if (tasksData.errors !== undefined) {
          dispatch({
            type: 'TASKS_ERRORS',
            payload: tasksData.errors
          })
          localStorage.removeItem("token")
        } 
        else {
          console.log('tasks:', tasksData)
          dispatch({
            type: 'FETCH_TASKS',
            payload: tasksData 
          })
        }
      })
    }
  }
}

export default fetchTasks