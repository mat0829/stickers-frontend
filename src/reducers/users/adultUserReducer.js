const initialState = {
  currentUser: {},
  errorMessage: null,
  errors: null
}

const adultUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ADULT_USER':
      return {
        ...state, 
        currentUser: action.payload
      }
    case 'ADULT_LOGIN_FAILURE':
      return {
        ...state, 
        errorMessage: action.payload
      }
    case 'ADULT_SIGNUP_FAILURE':
      return {
        ...state, 
        errors: action.payload
      }
    case 'UPDATE_ADULT_USER':
      return {
        ...state, 
        currentUser: action.payload
      }
    case 'LOGOUT_ADULT_USER':
      return {
        ...state, 
        currentUser: {} 
      }
    case 'CREATE_ADULT_AVATAR':
      return {
        ...state, 
        currentUser: {avatar: action.payload}
      }
    default:
      return state
  }
}

export default adultUserReducer