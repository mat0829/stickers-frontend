const childUserDelete = userId => {
  return dispatch => {
    const token = localStorage.token

    const result = window.confirm("Are you sure you want to delete this User? Click ok to confirm.")
    if (result) {
      const storedChildNames = JSON.parse(localStorage.getItem("childNames"))
      let childToDelete = storedChildNames.find(child => child.id === userId)

      function removeChild(array, childObject) {
        const index = array.indexOf(childObject)
        if (index > -1) {
            array.splice(index, 1);
        }
        window.localStorage.setItem('childNames', JSON.stringify(array))
      }
      removeChild(storedChildNames, childToDelete)

      fetch(`http://localhost:3000/api/v1/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(delete localStorage.token)
      .then(dispatch({
        type: 'LOGOUT_CHILD_USER'
      }))
    }
  }
}

export default childUserDelete