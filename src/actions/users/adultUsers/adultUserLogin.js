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
          console.log(returnUserData.message)
          dispatch({
            type: 'LOGIN_FAILURE',
            message: returnUserData.message
          })
          //alert(returnUserData.message)
        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } else {
        console.log(returnUserData)
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