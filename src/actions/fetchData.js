import axios from 'axios';
import key from '../assets/api_key'

export default function fetchData(city, state) {
  const url = `http://api.wunderground.com/api/${key}/almanac/q/${state}/${city}.json`
  return axios.get(url).then( (response) => {
    // debugger
    return {
      type: 'ADD_DATA',
      payload: response.data.almanac
    }
  })
}
