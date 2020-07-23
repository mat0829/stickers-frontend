const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
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
          console.log(newUserData.errors)
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          console.log(newUserData)
          localStorage.setItem("token", newUserData.jwt)
          dispatch(loginUser(newUserData.user))
        }
      })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export default userPostFetch