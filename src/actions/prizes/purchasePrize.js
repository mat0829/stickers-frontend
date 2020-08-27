import childUserUpdate from '../users/childUsers/childUserUpdate'
import editPrize from '../prizes/editPrize'

const purchasePrize = (prize, childUser, history) => {
  return dispatch => {
    debugger
    if (childUser.points < prize.cost) {
      dispatch({
        type: 'PRIZE_ERROR',
        payload: `You do not have enough Points to purchase "${prize.name}"`
      })
    }
    else {
      childUser.points -= prize.cost
      childUser.prizes.push(prize.image)
      prize.cost = 0

      dispatch(childUserUpdate(childUser))
      dispatch(editPrize(prize, history))
    }
  }
}

export default purchasePrize