const fetchTaskImages = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ 
        type: 'LOADING_TASK_IMAGES'
      })
      fetch("http://localhost:3000/api/v1/task_images", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(taskImagesData => {
        if (taskImagesData.errors !== undefined) {
          alert(taskImagesData.errors)
          localStorage.removeItem("token")
        } 
        else {
          console.log('taskImages:', taskImagesData)
          dispatch({
            type: 'FETCH_TASK_IMAGES',
            payload: taskImagesData
          })
        }
      })
    }
  }
}

export default fetchTaskImages