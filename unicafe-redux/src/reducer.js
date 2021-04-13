const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const goodIncremented = {
        ...state,
        good: state.good + 1
      }
      return goodIncremented
    case 'OK':
      const okIncremented = {
        ...state,
        ok: state.ok + 1
      }
      return okIncremented
    case 'BAD':
      const badIncremented = {
        ...state,
        bad: state.bad + 1
      }
      return badIncremented
    case 'ZERO':
      const valuesReset = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return valuesReset
    default: return state
  }
  
}

export default counterReducer