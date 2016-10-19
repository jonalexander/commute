export default function weatherReducer(state = {weatherData: []}, action) {
    debugger
  switch (action.type) {
    case 'ADD_DATA':
      return Object.assign({}, state, { weatherData: action.payload })
    default:
      return state
  }
}
