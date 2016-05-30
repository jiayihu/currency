import * as actionTypes from '../constants/actionTypes';

export default function rates(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_LATEST_RATES_SUCCEDED:
      return action.payload.rates;
    default:
      return state;
  }
}
