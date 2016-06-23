import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotEnabler } from 'react-hot-loader';
import Root from './App/Root';
import configureStore from './store';

const store = configureStore();

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
