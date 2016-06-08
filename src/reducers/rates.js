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
  if ((typeof state !== 'object') || !Array.isArray(currencies)) {
    throw new Error('State must be an Object and currencies an Array');
  }

  const userRates = {};
  currencies.forEach((currency) => (userRates[currency] = state[currency]));

  return userRates;
}
