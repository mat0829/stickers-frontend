const initialState = {
  message: null
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
      return {...state, message: action.message}
    default:
      return state
  }
}

export default errorReducer