const fetchStickers = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ 
        type: 'LOADING_STICKERS'
      })
      fetch("http://localhost:3000/api/v1/stickers", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(stickersData => {
        if (stickersData.errors !== undefined) {
          alert(stickersData.errors)
          // An error will occur if the token is invalid.
          // If this happens, you may want to remove the invalid token.
          localStorage.removeItem("token")
        } 
        else {
          console.log('stickers:', stickersData)
          dispatch({
            type: 'FETCH_STICKERS',
            payload: stickersData 
          })
        }
      })
    }
  }
}

export default fetchStickers