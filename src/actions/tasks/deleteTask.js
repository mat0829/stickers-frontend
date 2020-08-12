const deleteTask = taskId => {
  debugger
  return dispatch => {
    const token = localStorage.token

    const result = window.confirm("Are you sure you want to delete this Task? Click ok to confirm.")
    if (result) {
      fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(delete localStorage.token)
      .then(dispatch({
        type: 'DELETE_TASK',
        payload: taskId
      }))
    }
  }
}

export default deleteTask