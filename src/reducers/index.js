import { combineReducers } from 'redux';
import pick from 'lodash/pick';
import rates, * as ratesSelector from './rates';
import user, * as userSelectors from './user';

import base from '../features/base/ui-reducers/';

const dataReducer = combineReducers({
  rates,
  user,
});

const uiReducer = combineReducers({
  base,
});

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
});


/**
 * SELECTORS
 */

/**
 * Returns all the rates ids
 * @return {Array}
 */
export function allRatesIdsSelector(state) {
  return ratesSelector.allRatesIds(state.data.rates);
}

/**
 * Returns an object with the user bases and the user rates picked from the list
 * of all rates fetched from the server
 * @return {Object}
 */
export function basesSelector(state) {
  const userBases = userSelectors.bases(state.data.user);

  return userBases.map(userBase => ({
    ...userBase,
    rates: pick(
      ratesSelector.ratesByBase(state.data.rates, userBase.id),
      userSelectors.rates(state.data.user)
    ),
  }));
}

export function notUserRatesSelector(state) {
  const allRatesIds = ratesSelector.allRatesIds(state.data.rates);
  const userRatesIds = userSelectors.rates(state.data.user);

  return allRatesIds.filter(rateId => userRatesIds.indexOf(rateId) === -1);
}
