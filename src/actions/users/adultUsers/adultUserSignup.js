const adultUserSignup = user => {
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
        console.log('adult signup errors:', newUserData.errors)
        dispatch({
          type: 'ADULT_SIGNUP_FAILURE',
          payload: newUserData.errors
        })
      }
      else {
        console.log('new adult user:', newUserData.user)
        localStorage.setItem("token", newUserData.jwt)
        dispatch({
          type: 'LOGIN_ADULT_USER',
          payload: newUserData.user
        })
      }
    })
  }
}

export default adultUserSignup