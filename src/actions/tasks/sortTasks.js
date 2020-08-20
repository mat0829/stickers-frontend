const sortTasks = (childId) => {
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
          dispatch({
            type: 'TASK_ERROR',
            payload: "Please Select a Child"
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
          const sortedTasks = tasksData.filter(task => task.taskReceiverId === childId)
          dispatch({
            type: 'FETCH_TASKS',
            payload: sortedTasks
          })
        }
      })
    }
  }
}

export default sortTasks