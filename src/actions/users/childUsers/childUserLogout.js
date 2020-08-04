const ChildUserLogout = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT_CHILD_USER'
    })
  }
}

export default ChildUserLogout