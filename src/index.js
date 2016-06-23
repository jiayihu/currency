import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App/App';
import rootReducer from './reducers/';
import rootSaga from './sagas/';
import { ratesActions } from './actions/';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
sagaMiddleware.run(rootSaga);
store.dispatch(ratesActions.latestRatesRequested());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
