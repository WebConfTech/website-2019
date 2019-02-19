import { combineReducers } from 'redux';
import { ADD_EMAIL_REQUEST, ADD_EMAIL_SUCCESS, ADD_EMAIL_FAILURE } from './actions';

const adding = (state = false, action) => {
  switch (action.type) {
    case ADD_EMAIL_REQUEST:
      return true;
    case ADD_EMAIL_SUCCESS:
    case ADD_EMAIL_FAILURE:
      return false;
    default:
      return state;
  }
};

export const email = combineReducers({
  adding
});
