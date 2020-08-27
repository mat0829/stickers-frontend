const addNewPrize = (prize, history) => {
  const {
    prizeGiverId, 
    prizeReceiverId, 
    name, 
    cost, 
    image, 
    purchased,
  } = prize
  
  const token = localStorage.token
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/prizes`, {
      method: "POST",
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
    .then(newPrizeData => {
      if (newPrizeData.errors !== undefined) {
        console.log('create prize errors:', newPrizeData.errors)
        dispatch({
          type: 'PRIZE_ERRORS',
          payload: newPrizeData.errors
        })
      } 
      else {
        console.log('new prize:', newPrizeData)
        dispatch({
          type: 'ADD_NEW_PRIZE',
          payload: newPrizeData
        })
        history.push(`/prizes/${newPrizeData.id}`)
      }
    })
  }
}

export default addNewPrize