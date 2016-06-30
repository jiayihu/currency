import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  bases: {
    EUR: {
      id: 'EUR',
      value: 1,
    },
  },
  basesOrder: ['EUR'],
  rates: ['AUD', 'USD'],
};

function basesByIdReducer(state = defaultState.bases, action) {
  switch (action.type) {
    case actionTypes.UPDATE_BASE_VALUE: {
      const { baseId, newValue } = action.payload;
      return {
        ...state,
        [baseId]: {
          ...state[baseId],
          value: newValue,
        },
      };
    }
    default:
      return state;
  }
}

function basesOrderReducer(state = defaultState.basesOrder) {
  return state;
}

function ratesReducer(state = defaultState.rates, action) {
  switch (action.type) {
    case actionTypes.ADD_RATE:
      return state.concat(action.payload.rates);
    case actionTypes.DELETE_RATE:
      return state.filter(rateId => rateId !== action.payload.rateId);
    default:
      return state;
  }
}

export default combineReducers({
  basesById: basesByIdReducer,
  basesOrder: basesOrderReducer,
  rates: ratesReducer,
});


/**
 * Selectors
 */

export function bases(state) {
  return state.basesOrder.map(baseId => state.basesById[baseId]);
}

export function rates(state) {
  return state.rates;
}
