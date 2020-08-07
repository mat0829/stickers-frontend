const initialState = {
  currentUser: {}
}

const adultUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ADULT_USER':
      return {...state, currentUser: action.user}
    case 'UPDATE_ADULT_USER':
      return {...state, currentUser: action.updatedUser}
    case 'LOGOUT_ADULT_USER':
      return {...state, currentUser: {} }
    default:
      return state
  }
}

export default adultUserReducer