import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import './index.css';

let store = createStore(rootReducer)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
