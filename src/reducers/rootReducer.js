import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const reducers = {
  weatherData: weatherReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
