const initialState = {
  message: null,
  signupErrors: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default errorReducer