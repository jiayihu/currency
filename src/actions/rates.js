import * as actionTypes from '../constants/actionTypes';

export function latestRatesRequested() {
  return { type: actionTypes.GET_LATEST_RATES_REQUESTED };
}

export function latestRatesSucceeded({ base, rates }) {
  return {
    type: actionTypes.GET_LATEST_RATES_SUCCEDED,
    payload: {
      base,
      rates,
    },
  };
}

export function latestRatesFailed(error) {
  return {
    error: true,
    type: actionTypes.GET_LATEST_RATES_FAILED,
    payload: error,
  };
}
