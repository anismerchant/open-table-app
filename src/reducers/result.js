const resultDefaultState = {}

const resultReducer = (state=resultDefaultState, action) => {
  switch(action.type) {
    case 'GET_RESTAURANT':
      return action.data
    default:
      return state
  }
}

export default resultReducer
