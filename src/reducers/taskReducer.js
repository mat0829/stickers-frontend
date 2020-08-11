const taskReducer = (state = {tasks: [], loading: false}, action) => {
  switch(action.type) {
      case 'LOADING_TASKS':
        return {
          ...state,
          tasks: [...state.tasks],
          loading: true
        }
      case 'FETCH_TASKS':
        return {
          ...state, 
          tasks: action.payload,
          loading: false
        }
      case 'ADD_NEW_TASK':
        return {
          ...state, 
          tasks: [...state.tasks, action.payload],
          loading: false
        }
      default: 
        return state
  }
}

export default taskReducer