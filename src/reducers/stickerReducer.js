
const stickerReducer = (state = {stickers: [], loading: false}, action) => {
  switch(action.type) {
      case 'LOADING_STICKERS':
        return {
            ...state,
            stickers: [...state.stickers],
            loading: true
        }
      case 'FETCH_STICKERS':
        return {
            ...state,
            stickers: action.payload,
            loading: false
        }
      default: 
        return state
  }
}

export default stickerReducer