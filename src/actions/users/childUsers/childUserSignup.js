const childUserSignup = user => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(newUserData => {
      if (newUserData.errors !== undefined) {
        console.log('child signup errors:', newUserData.errors)
        dispatch({
          type: 'SIGNUP_FAILURE',
          payload: newUserData.errors
        })
      } 
      else {
        console.log('new child user:', newUserData.user)
        localStorage.setItem("token", newUserData.jwt)
        dispatch({
          type: 'LOGIN_CHILD_USER',
          payload: newUserData.user
        })
      }
    })
  }
}

export default childUserSignup