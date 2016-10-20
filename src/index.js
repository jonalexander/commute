import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import './index.css';

let storewithmiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={ storewithmiddleware }>
    <App />
  </Provider>,
  document.getElementById('root')
);
