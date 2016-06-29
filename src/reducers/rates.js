import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  EUR: {},
};

export default function ratesReducer(state = defaultState, action) {
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

export function allRatesIds(state) {
  const ratesObj = state[Object.keys(state)[0]];
  return Object.keys(ratesObj);
}

export function ratesByBase(state, baseId) {
  return state[baseId] || {};
}
