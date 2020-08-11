const adultUserUpdate = user => {
  const token = localStorage.token
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(updatedUserData => {
      if (updatedUserData.errors !== undefined) {
          console.log(updatedUserData.errors)
          alert(updatedUserData.errors)
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } 
      else {
        console.log(updatedUserData)
        dispatch({
          type: 'UPDATE_ADULT_USER',
          payload: updatedUserData
        })
      }
    })
  }
}

export default adultUserUpdate