import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import rootSaga from '../sagas/';
import { ratesActions } from '../actions/';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  sagaMiddleware.run(rootSaga);
  store.dispatch(ratesActions.latestRatesRequested());

  return store;
}
