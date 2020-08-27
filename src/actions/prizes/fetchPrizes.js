const fetchPrizes = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      dispatch({ 
        type: 'LOADING_PRIZES'
      })
      fetch("http://localhost:3000/api/v1/prizes", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(prizesData => {
        if (prizesData === null) {
          dispatch({
            type: 'PRIZE_ERROR',
            payload: "You Currently have 0 Prizes."
          })
        }
        else if (prizesData.errors !== undefined) {
          dispatch({
            type: 'PRIZES_ERRORS',
            payload: prizesData.errors
          })
          localStorage.removeItem("token")
        } 
        else {
          let prizesSortedByName = prizesData.sort((a, b) => (a.name > b.name) ? 1 : -1)
          console.log('prizes sorted by name:', prizesSortedByName)
          dispatch({
            type: 'FETCH_PRIZES',
            payload: prizesSortedByName
          })
        }
      })
    }
  }
}

export default fetchPrizes