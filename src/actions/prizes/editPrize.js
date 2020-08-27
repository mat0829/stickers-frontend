const editPrize = (prize, history) => {
  const {
    prizeGiverId, 
    prizeReceiverId, 
    name, 
    cost, 
    image, 
    purchased
  } = prize
  
  const token = localStorage.token
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/prizes/${prize.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        prizeGiverId: prizeGiverId,
        prizeReceiverId: prizeReceiverId,
        name: name,
        cost: cost,
        image: image,
        purchased: purchased
      })
    })
    .then(resp => resp.json())
    .then(updatedPrizeData => {
      if (updatedPrizeData.errors !== undefined) {
          console.log(updatedPrizeData.errors)
          dispatch({
            type: 'PRIZE_ERRORS',
            payload: updatedPrizeData.errors
          })
      } 
      else {
        console.log('updated prize:', updatedPrizeData)
        dispatch({
          type: 'UPDATE_PRIZE',
          payload: updatedPrizeData
        })
        history.push(`/prizes/${updatedPrizeData.id}`)
      }
    })
  }
}

export default editPrize