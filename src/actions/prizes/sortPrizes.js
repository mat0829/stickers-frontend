const sortPrizes = (childName) => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
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
            payload: "Please Select a Child"
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
          const prizesSortedByChild = prizesSortedByName.filter(prize => prize.prize_child.name === childName)
          console.log(`prizes sorted by Child ${childName}:`, prizesSortedByChild)
          dispatch({
            type: 'FETCH_PRIZES',
            payload: prizesSortedByChild
          })
        }
      })
    }
  }
}

export default sortPrizes