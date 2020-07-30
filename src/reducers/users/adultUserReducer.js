const initialState = {
  currentUser: {}
}

export default function adultUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload}
    case 'UPDATE_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT_USER':
      return {...state, currentUser: {} }
    case 'CREATE_AVATAR':
      return {...state, currentUser: {avatar: action.payload}}
    default:
      return state
  }
}