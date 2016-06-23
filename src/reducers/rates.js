import * as actionTypes from '../constants/actionTypes';

export default function ratesReducer(state = {}, action) {
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

export function ratesByBase(state, baseId) {
  return state[baseId] || {};
}
