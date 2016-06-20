import * as actionTypes from '../constants/actionTypes';

export default function rates(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_LATEST_RATES_SUCCEDED:
      return {
        ...state,
        [action.payload.base]: action.payload.rates,
      };
    default:
      return state;
  }
}

export function ratesSelector(state, currencies) {
  const userRates = {};
  currencies.forEach((currency) => (userRates[currency] = state[currency]));

  return userRates;
}
