const initialState = ''

const filterReducer = (state = initialState, action) => {
  console.log('action', action)

  switch (action.type) {
    case 'SET_FILTER':
      return action.data.filter
    default:
      return state
  }
}

export const updateFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: { filter }
  }
}

export default filterReducer