import { SHOW_ADD_RATE, HIDE_ADD_RATE } from '../ui-actions/';
import { combineReducers } from 'redux';

const defaultState = {
  addRate: {
    isOpen: false,
  },
};

function addRate(state = defaultState.addRate, action) {
  switch (action.type) {
    case SHOW_ADD_RATE:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_ADD_RATE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}

export default combineReducers({
  addRate,
});

export function uiAddRateSelector(state) {
  return state.ui.base.addRate;
}
