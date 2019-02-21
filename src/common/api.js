import { API_BASE_URL } from './config';

export const SAVE_EMAIL = `${API_BASE_URL}/lambdas/mail_save`;

const makeHeaders = () =>
  new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

export const post = async (url, data) => {
  const response = await fetch(url, {
    headers: makeHeaders(),
    method: 'POST',
    body: JSON.stringify(data)
  });

  return response;
};
