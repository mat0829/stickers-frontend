const fetchTasks = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ 
        type: 'LOADING_TASKS'
      })
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
          return dispatch({
            type: 'TASK_ERROR',
            payload: "You Currently have 0 Tasks."
          })
        }
        if (tasksData.errors !== undefined) {
          localStorage.removeItem("token")
          return dispatch({
            type: 'TASKS_ERRORS',
            payload: tasksData.errors
          })
        } 
        let tasksSortedByName = tasksData.sort((a, b) => (a.name > b.name) ? 1 : -1)
        console.log('tasks sorted by name:', tasksSortedByName)
        dispatch({
          type: 'FETCH_TASKS',
          payload: tasksSortedByName
        })
      })
    }
  }
}

export default fetchTasks