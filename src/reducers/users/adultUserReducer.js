export default function adultUserReducer(state = {users: []}, action) {
  switch (action.type) {
    case 'CREATE_ADULT_USER':
      return action.formData
  
    default:
      return state
    }
}