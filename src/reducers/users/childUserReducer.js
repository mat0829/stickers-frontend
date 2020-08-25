const initialState = {
  currentUser: {},
  errorMessage: null,
  errors: null
}

const childUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_CHILD_USER':
      return {
        ...state, 
        currentUser: action.payload,
        errorMessage: null,
        errors: null
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
        currentUser: action.payload,
        errors: null
      }
    case 'CHILD_UPDATE_FAILURE':
      return {
        ...state, 
        errors: action.payload
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

export default childUserReducer