const initialState = {
  currentUser: {},
  message: null,
  signupErrors: null
}

export default function childUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_CHILD_USER':
      return {
        ...state, 
        currentUser: action.payload
      }
    case 'LOGIN_FAILURE':
      return {
        ...state, 
        message: action.payload
      }
    case 'SIGNUP_FAILURE':
      return {
        ...state, 
        signupErrors: action.payload
      }
    case 'UPDATE_CHILD_USER':
      return {
        ...state, 
        currentUser: action.payload
      }
    case 'LOGOUT_CHILD_USER':
      return {
        ...state, 
        currentUser: {} 
      }
    case 'CREATE_CHILD_AVATAR':
      return {
        ...state, 
        currentUser: {avatar: action.payload} 
      }
    default:
      return state
  }
}