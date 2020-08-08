const adultUserLogin = user => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(returnUserData => {
      if (returnUserData.message !== undefined) {
          console.log('login error:', returnUserData.message)
          dispatch({
            type: 'LOGIN_FAILURE',
            message: returnUserData.message
          })
      } else {
          console.log('returning user:', returnUserData.user)
          localStorage.setItem("token", returnUserData.jwt)
          dispatch({
            type: 'LOGIN_ADULT_USER',
            user: returnUserData.user
          })
      }
    })
  }
}

export default adultUserLogin