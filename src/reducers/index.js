import { combineReducers } from 'redux';
import pick from 'lodash/pick';
import rates, * as ratesSelector from './rates';
import user, * as userSelectors from './user';

export default combineReducers({
  rates,
  user,
});

export function basesSelector(state) {
  const userBases = userSelectors.bases(state.user);

  return userBases.map(userBase => ({
    ...userBase,
    rates: pick(
      ratesSelector.ratesByBase(state.rates, userBase.id),
      userSelectors.rates(state.user)
    ),
  }));
}
