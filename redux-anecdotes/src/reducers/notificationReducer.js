const initialState = ''
let notificationTimer

const notificationReducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {
      case 'SET_NOTIFICATION':
        return [action.message]
      case 'REMOVE_NOTIFICATION':
        return initialState
      default:
        return state
  }
}

export const setNotification = (message, timeInSeconds) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message,
    })
    clearTimeout(notificationTimer)
    notificationTimer = setTimeout(() => {
      dispatch(removeNotification())
    }, timeInSeconds * 1000)
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
    message: null,
  }
}

export default notificationReducer