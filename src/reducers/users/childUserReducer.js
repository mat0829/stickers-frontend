const initialState = {
  currentUser: {},
  errorMessage: null,
  errors: null
}

export default function childUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_CHILD_USER':
      return {
        ...state, 
        currentUser: action.payload
      }
    case 'CHILD_LOGIN_FAILURE':
      return {
        ...state, 
        errorMessage: action.payload
      }
    case 'CHILD_SIGNUP_FAILURE':
      return {
        ...state, 
        errors: action.payload
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