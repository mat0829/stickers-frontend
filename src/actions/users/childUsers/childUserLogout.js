const ChildUserLogout = () => {
  localStorage.removeItem("token")
  
  return dispatch => {
    dispatch({
      type: 'LOGOUT_CHILD_USER'
    })
  }
}

export default ChildUserLogout