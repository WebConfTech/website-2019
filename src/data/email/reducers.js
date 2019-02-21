import { ADD_EMAIL_REQUEST, ADD_EMAIL_SUCCESS, ADD_EMAIL_FAILURE } from './actions';

const initialState = {
  adding: false,
  succcess: false,
  error: ''
};

export const email = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL_REQUEST:
      return Object.assign({}, state, {
        adding: true,
        succcess: false,
        error: ''
      });
    case ADD_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        adding: false,
        success: true
      });
    case ADD_EMAIL_FAILURE:
      return Object.assign({}, state, {
        adding: false,
        error: action.payload
      });
    default:
      return state;
  }
};
