import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer
});
 
export default rootReducer;

export function usersReducer(state = [], action) {
    return state
}

function tasksReducer(state = [], action) {
    return state
}