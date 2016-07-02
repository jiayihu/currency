import * as actionTypes from '../constants/actionTypes';

export function latestRatesRequested() {
  return { type: actionTypes.GET_LATEST_RATES_REQUESTED };
}

export function latestRatesSucceeded({ base, rates }) {
  return {
    payload: {
      base,
      rates,
    },
    type: actionTypes.GET_LATEST_RATES_SUCCEDED,
  };
}

export function latestRatesFailed(error) {
  return {
    error: true,
    payload: error,
    type: actionTypes.GET_LATEST_RATES_FAILED,
  };
}
