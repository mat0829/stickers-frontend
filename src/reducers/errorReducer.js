const initialState = {
  message: null,
  signupErrors: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
      return {...state, message: action.message}
    case 'SIGNUP_FAILURE':
      return {...state, signupErrors: action.errors}
    default:
      return state
  }
}

export default errorReducer