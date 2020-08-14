const childUserLogin = user => {
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
        console.log('child login error:', returnUserData.message)
        dispatch({
          type: 'CHILD_LOGIN_FAILURE',
          payload: returnUserData.message
        })
      } 
      else {
        console.log('return child user:', returnUserData)
        localStorage.setItem("token", returnUserData.jwt)
        dispatch({
          type: 'LOGIN_CHILD_USER',
          payload: returnUserData.user
        })
      }
    })
  }
}

export default childUserLogin