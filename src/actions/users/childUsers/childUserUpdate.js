const childUserUpdate = user => {
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
        dispatch({
          type: 'CHILD_UPDATE_FAILURE',
          payload: updatedUserData.errors
        })
      } 
      else {
        console.log('updated child user:' ,updatedUserData)

        let storedChildNames = JSON.parse(localStorage.getItem("childNames"))
        let childToUpdate = storedChildNames.find(child => child.id === updatedUserData.id)
        
        function updateChild(array, childObject) {
          const index = array.indexOf(childObject)
          array[index] = {
            id: updatedUserData.id,
            name: updatedUserData.name
          }
          window.localStorage.setItem('childNames', JSON.stringify(array))
        }
        updateChild(storedChildNames, childToUpdate)
  
        dispatch({
          type: 'UPDATE_CHILD_USER',
          payload: updatedUserData
        })
      }
    })
  }
}

export default childUserUpdate