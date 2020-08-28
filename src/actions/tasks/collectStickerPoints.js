import childUserUpdate from '../users/childUsers/childUserUpdate'
import editTask from '../tasks/editTask'

const collectStickerPoints = (task, childUser, history) => {
  debugger
  childUser.points += task.value
  childUser.stickers.push(task.stickerImage)
  task.value = 0

  return dispatch => {
    dispatch(childUserUpdate(childUser))
    dispatch(editTask(task, history))
  }
}

export default collectStickerPoints