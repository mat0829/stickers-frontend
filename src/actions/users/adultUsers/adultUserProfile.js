const adultUserProfile = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(userData => {
        if (userData.errors !== undefined) {
          console.log(userData.errors)
          alert(userData.errors)
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
          localStorage.removeItem("token")
        } 
        else {
          dispatch({
            type: 'LOGIN_ADULT_USER',
            payload: userData.user
          })
        }
      })
    }
  }
}

export default adultUserProfile