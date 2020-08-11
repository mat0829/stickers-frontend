const adultUserDelete = userId => {
  return dispatch => {
    const token = localStorage.token

    const result = window.confirm("Are you sure you want to delete this User? Click ok to confirm.")
    if (result) {
      fetch(`http://localhost:3000/api/v1/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(delete localStorage.token)
      .then(dispatch({
        type: 'LOGOUT_ADULT_USER'
      }))
    }
  }
}

export default adultUserDelete