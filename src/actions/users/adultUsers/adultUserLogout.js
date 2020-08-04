const AdultUserLogout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT_ADULT_USER'
    })
  }
}

export default AdultUserLogout