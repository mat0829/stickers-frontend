const childUserDelete = userId => {
  return dispatch => {
    const token = localStorage.token
    const result = window.confirm("Are you sure you want to delete this User? Click ok to confirm.")
    if (result) {
      return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(delete localStorage.token)
      .then(alert(`User Successfully Deleted`))
      .then(dispatch(deleteUser(userId)))
    }
  }
}

const deleteUser = () => ({
  type: 'LOGOUT_CHILD_USER'
})

export default childUserDelete