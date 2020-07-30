const initialState = {
  currentUser: {}
}

export default function adultUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_ADULT_USER':
      return {...state, currentUser: action.payload}
    case 'UPDATE_ADULT_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT_ADULT_USER':
      return {...state, currentUser: {} }
    case 'CREATE_ADULT_AVATAR':
      return {...state, currentUser: {avatar: action.payload} }
    default:
      return state
  }
}