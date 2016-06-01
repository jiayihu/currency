import { combineReducers } from 'redux';
import rates from './rates';
import user from './user';

export default combineReducers({
  rates,
  user,
});
