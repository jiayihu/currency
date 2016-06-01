import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const defaultBases = [
  {
    id: 'EUR',
    value: 1,
  },
];

function bases(state = defaultBases, action) {
  switch (action.type) {
    case actionTypes.ADD_BASE:
      return Object.assign({}, state, {
        bases: state.bases.concat(action.payload.base),
      });
    default:
      return state;
  }
}

export default combineReducers({
  bases,
});
