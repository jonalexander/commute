import axios from 'axios';
// import key from '../assets/api_key'

export default function fetchData(city, state) {
  //https://crossorigin.me/

  //const url = `http://api.wunderground.com/api/${key}/almanac/q/${state}/${city}.json`
  return axios.get('http://localhost:3006/get-weather-data', {
    params: {
      city: city,
      state: state
    }
  })
  .then( (response) => {
    response.data.almanac.loc = `${city}, ${state}`
    debugger
    return {
      type: 'ADD_DATA',
      payload: response.data
    }
  })
}
