const initialState = {
  currentUser: {}
}

export default function childUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_CHILD_USER':
      return {...state, currentUser: action.payload}
    case 'UPDATE_CHILD_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT_CHILD_USER':
      return {...state, currentUser: {} }
    case 'CREATE_CHILD_AVATAR':
      return {...state, currentUser: {avatar: action.payload} }
    default:
      return state
  }
}