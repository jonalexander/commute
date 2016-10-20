import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import './index.css';
// import react router

// let storewithmiddleware = applyMiddleware(reduxPromise)(createStore)(rootReducer)(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default function configureStore() {
  const finalCreateStore = compose(
    applyMiddleware(reduxPromise),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )(createStore);

  const store = finalCreateStore(rootReducer);
  return store;
}

ReactDOM.render(
  <Provider store={ configureStore()  }>
    <App />
  </Provider>,
  document.getElementById('root')
);
