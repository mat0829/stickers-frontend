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
        console.log('signup errors:', newUserData.errors)
        dispatch({
          type: 'SIGNUP_FAILURE',
          errors: newUserData.errors
        })
      } else {
        console.log(newUserData)
        localStorage.setItem("token", newUserData.jwt)
        dispatch({
          type: 'LOGIN_CHILD_USER',
          user: newUserData.user
        })
      }
    })
  }
}

export default childUserSignup