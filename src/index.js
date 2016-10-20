import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import DevTools from './components/DevTools';
import './index.css';
// import react router


function configureStore() {
  const finalCreateStore = compose(
    applyMiddleware(reduxPromise),
    DevTools.instrument()
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
