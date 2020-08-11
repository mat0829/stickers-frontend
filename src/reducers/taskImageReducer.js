const taskImageReducer = (state = {taskImages: [], loading: false}, action) => {
  switch(action.type) {
      case 'LOADING_TASK_IMAGES':
        return {
          ...state,
          taskImages: [...state.taskImages],
          loading: true
        }
      case 'FETCH_TASK_IMAGES':
        return {
          ...state,
          taskImages: [...state.taskImages, action.payload],
          loading: false
        }
      default: 
        return state
  }
}

export default taskImageReducer