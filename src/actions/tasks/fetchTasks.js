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
        if (tasksData.errors !== undefined) {
          alert(tasksData.errors)
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
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