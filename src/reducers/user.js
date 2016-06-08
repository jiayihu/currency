import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const defaultBases = {
  0: {
    id: 0,
    name: 'EUR',
    value: 1,
  },
};

function bases(state = defaultBases, action) {
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

function basesOrder(state = [0]) {
  return state;
}

function currencies(state = ['AUD', 'USD']) {
  return state;
}

export default combineReducers({
  bases,
  basesOrder,
  currencies,
});
