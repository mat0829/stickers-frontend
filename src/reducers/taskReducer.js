const initialState = {
  tasks: [],
  errorMessage: null,
  errors: null,
  loading: false
}

const taskReducer = (state = initialState, action) => {
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
          loading: false,
          errors: null
        }
      case 'ADD_NEW_TASK':
        return {
          ...state, 
          tasks: [...state.tasks, action.payload],
          loading: false,
          errors: null
        }
      case 'UPDATE_TASK':
        return {
          ...state, 
          tasks: [...state.tasks.map(task => task.id === action.payload.id ? action.payload : task)],
          loading: false,
          errors: null
        }
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: [...state.tasks.filter(task => task.id === action.payload ? false : true)]
        }
      case 'TASK_ERRORS':
        return {
          ...state, 
          errors: action.payload,
          loading: false
        }
      case 'TASK_ERROR':
        return {
          ...state,
          errorMessage: action.payload,
          loading: false
        }
      default: 
        return state
  }
}

export default taskReducer