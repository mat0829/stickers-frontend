const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
    .then(resp => resp.json())
    .then(returnUserData => {
      if (returnUserData.errors !== undefined) {
          console.log(returnUserData.errors)
          alert(returnUserData.errors)
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } else {
        console.log(returnUserData)
        localStorage.setItem("token", returnUserData.jwt)
        dispatch(loginUser(returnUserData.user))
      }
    })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export default userLoginFetch