import { take, put, fork, call } from 'redux-saga/effects';
import * as api from '../services/api';
import * as actionTypes from '../constants/actionTypes';
import { ratesActions } from '../actions/';

function* getLatestRates() {
  const { response, error } = yield call(api.getLatestRates);
  if (response) {
    yield put(ratesActions.latestRatesSucceeded(response));
  } else {
    yield put(ratesActions.latestRatesFailed(error));
  }
}

function* watchGetLatestRates() {
  while(true) { // eslint-disable-line
    yield take(actionTypes.GET_LATEST_RATES_REQUESTED);
    yield fork(getLatestRates);
  }
}

export default function* rootSaga() {
  yield [watchGetLatestRates()];
}
