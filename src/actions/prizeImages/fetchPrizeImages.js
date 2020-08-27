const fetchPrizeImages = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ 
        type: 'LOADING_PRIZE_IMAGES'
      })
      fetch("http://localhost:3000/api/v1/prize_images", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(prizeImagesData => {
        if (prizeImagesData.errors !== undefined) {
          alert(prizeImagesData.errors)
          localStorage.removeItem("token")
        } 
        else {
          console.log('prizeImages:', prizeImagesData)
          dispatch({
            type: 'FETCH_PRIZE_IMAGES',
            payload: prizeImagesData
          })
        }
      })
    }
  }
}

export default fetchPrizeImages