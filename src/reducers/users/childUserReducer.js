const initialState = {
  currentUser: {},
  message: null,
  errors: null
}

export default function childUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_CHILD_USER':
      return {...state, currentUser: action.user}
    case 'LOGIN_FAILURE':
      return {...state, message: action.message}
    case 'SIGNUP_FAILURE':
      return {...state, signupErrors: action.errors}
    case 'UPDATE_CHILD_USER':
      return {...state, currentUser: action.updatedUser}
    case 'LOGOUT_CHILD_USER':
      return {...state, currentUser: {} }
    case 'CREATE_CHILD_AVATAR':
      return {...state, currentUser: {avatar: action.avatar} }
    default:
      return state
  }
}