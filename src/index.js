import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotEnabler } from 'react-hot-loader';
import Root from './App/Root';
import configureStore from './store';
import * as storage from './utils/storage';
import debounce from 'lodash/debounce';

const initialState = storage.get('currencyApp');
const store = configureStore(initialState);
const initialUiState = store.getState().ui;

store.subscribe(debounce(() => {
  const currentState = store.getState();
  // Store only the data in the store with default ui state
  const onlyData = {
    ...currentState,
    ui: initialUiState,
  };
  storage.set('currencyApp', onlyData);
}, 250));

ReactDOM.render(
  <HotEnabler>
    <Root store={store} />
  </HotEnabler>,
  document.getElementById('app')
);

/**
 * React Hot Reloading
 */
if (module && module.hot) {
  module.hot.accept('./App/Root.jsx', () => {
    const NextRoot = require('./App/Root').default; // eslint-disable-line
    ReactDOM.render(
      <HotEnabler>
        <NextRoot store={store} />
      </HotEnabler>,
      document.getElementById('app')
    );
  });
}
