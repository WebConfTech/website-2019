import { combineReducers } from 'redux';
import { email } from './email/reducers';
import { checkout } from './checkout/reducers';

export default combineReducers({
  email,
  checkout
});
