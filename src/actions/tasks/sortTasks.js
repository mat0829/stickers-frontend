const sortTasks = (childName) => {
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
          let tasksSortedByName = tasksData.sort((a, b) => (a.name > b.name) ? 1 : -1)
          const tasksSortedByChild = tasksSortedByName.filter(task => task.task_child.name === childName)
          console.log(`tasks sorted by Child ${childName}:`, tasksSortedByChild)
          dispatch({
            type: 'FETCH_TASKS',
            payload: tasksSortedByChild
          })
        }
      })
    }
  }
}

export default sortTasks