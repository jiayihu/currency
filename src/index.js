import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './App/App';
import rootReducer from './reducers/';
import rootSaga from './sagas/';
import * as actionTypes from './constants/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
sagaMiddleware.run(rootSaga);
store.dispatch({ type: actionTypes.GET_LATEST_RATES_REQUESTED });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
