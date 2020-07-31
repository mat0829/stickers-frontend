
export default function stickerReducer(state = {stickers: []}, action) {
  switch (action.type) {
    case FETCH_STICKERS:
      return {stickers: action.payload}
    default:
      return state
  }
}