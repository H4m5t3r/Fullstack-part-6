const notificationReducer = (state = '', action) => {
  console.log('action', action)

  switch (action.type) {
      case 'SET_NOTIFICATION':
        return [action.message]
      case 'REMOVE_NOTIFICATION':
        return [action.message]
      default:
        return state
  }
}

export const setNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
    message: null,
  }
}

export default notificationReducer