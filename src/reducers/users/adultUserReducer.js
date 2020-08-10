const initialState = {
  currentUser: {},
  message: null,
  signupErrors: null
}

const adultUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ADULT_USER':
      return {...state, currentUser: action.user}
    case 'LOGIN_FAILURE':
      return {...state, message: action.message}
    case 'SIGNUP_FAILURE':
      return {...state, signupErrors: action.errors}
    case 'UPDATE_ADULT_USER':
      return {...state, currentUser: action.updatedUser}
    case 'LOGOUT_ADULT_USER':
      return {...state, currentUser: {} }
    case 'CREATE_ADULT_AVATAR':
      return {...state, currentUser: {avatar: action.avatar}}
    default:
      return state
  }
}

export default adultUserReducer