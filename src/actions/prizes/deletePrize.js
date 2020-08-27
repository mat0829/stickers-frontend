const deletePrize = (prizeId, history) => {
  return dispatch => {
    const token = localStorage.token
    const result = window.confirm("Are you sure you want to delete this Prize? Click ok to confirm.")
    if (result) {
      fetch(`http://localhost:3000/api/v1/prizes/${prizeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(dispatch({
        type: 'DELETE_PRIZE',
        payload: prizeId
      }))
      history.push('/prizes')
    }
  }
}

export default deletePrize