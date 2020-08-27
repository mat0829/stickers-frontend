const initialState = {
  prizes: [],
  errorMessage: null,
  errors: null,
  loading: false
}

const prizeReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'LOADING_PRIZES':
        return {
          ...state,
          prizes: [...state.prizes],
          loading: true
        }
      case 'FETCH_PRIZES':
        return {
          ...state, 
          prizes: action.payload,
          loading: false,
          errors: null
        }
      case 'ADD_NEW_PRIZE':
        return {
          ...state, 
          prizes: [...state.prizes, action.payload],
          loading: false,
          errors: null
        }
      case 'UPDATE_PRIZE':
        return {
          ...state, 
          prizes: [...state.prizes.map(prize => prize.id === action.payload.id ? action.payload : prize)],
          loading: false,
          errors: null
        }
      case 'DELETE_PRIZE':
        return {
          ...state,
          prizes: [...state.prizes.filter(prize => prize.id === action.payload ? false : true)]
        }
      case 'PRIZE_ERRORS':
        return {
          ...state, 
          errors: action.payload,
          loading: false
        }
      case 'PRIZE_ERROR':
        return {
          ...state,
          errorMessage: action.payload,
          loading: false
        }
      default: 
        return state
  }
}

export default prizeReducer