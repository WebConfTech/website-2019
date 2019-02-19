import { post, SAVE_EMAIL } from 'common/api';

export const ADD_EMAIL_REQUEST = 'email/add/request';
export const ADD_EMAIL_SUCCESS = 'email/add/success';
export const ADD_EMAIL_FAILURE = 'email/add/failure';

const addEmailRequest = email => ({
  type: ADD_EMAIL_REQUEST,
  payload: email
});

const addEmailSuccess = () => ({
  type: ADD_EMAIL_SUCCESS
});

const addEmailFailure = message => ({
  type: ADD_EMAIL_FAILURE,
  payload: message
});

export const addEmail = email => async dispatch => {
  dispatch(addEmailRequest(email));

  try {
    await post(SAVE_EMAIL, { address: email });
    dispatch(addEmailSuccess());
  } catch (e) {
    dispatch(addEmailFailure(e.message));
  }
};
