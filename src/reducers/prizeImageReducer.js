const prizeImageReducer = (state = {prizeImages: [], loading: false}, action) => {
  switch(action.type) {
      case 'LOADING_PRIZE_IMAGES':
        return {
          ...state,
          prizeImages: [...state.prizeImages],
          loading: true
        }
      case 'FETCH_PRIZE_IMAGES':
        return {
          ...state,
          prizeImages: action.payload,
          loading: false
        }
      default: 
        return state
  }
}

export default prizeImageReducer