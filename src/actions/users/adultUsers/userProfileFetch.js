const userProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      return fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(userData => {
        debugger
        if (userData.errors !== undefined) {
          console.log(userData.errors)
          alert(userData.errors)
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
          localStorage.removeItem("token")
        } else {
          dispatch(loginUser(userData.user))
        }
      })
    }
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export default userProfileFetch