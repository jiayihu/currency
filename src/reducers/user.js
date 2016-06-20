import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  bases: {
    0: {
      id: 0,
      name: 'EUR',
      value: 1,
    },
  },
  basesOrder: [0],
  currencies: ['AUD', 'USD'],
};

function bases(state = defaultState.bases, action) {
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

function basesOrder(state = defaultState.basesOrder) {
  return state;
}

function currencies(state = defaultState.currencies) {
  return state;
}

export default combineReducers({
  bases,
  basesOrder,
  currencies,
});
