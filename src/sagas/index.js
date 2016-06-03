import { take, put, fork, call } from 'redux-saga/effects';
import * as api from '../services/api';
import * as actionTypes from '../constants/actionTypes';

function* getLatestRates() {
  const { response, error } = yield call(api.getLatestRates);
  if(response) {
    yield put({
      type: actionTypes.GET_LATEST_RATES_SUCCEDED,
      payload: {
        base: response.base,
        rates: response.rates,
      },
    });
  } else {
    yield put({
      type: actionTypes.GET_LATEST_RATES_FAILED,
      payload: { error },
    });
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
