export default function weatherReducer(state = {weatherData: []}, action) {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { weatherData: action.payload })
    default:
      return state
  }
}
