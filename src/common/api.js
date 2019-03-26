import { API_BASE_URL, CHECKOUT_API_BASE_URL } from './config';

export const SAVE_EMAIL = `${API_BASE_URL}/lambdas/mail_save`;
export const CUSTOMER = `${CHECKOUT_API_BASE_URL}/customers`;
export const TICKET = `${CHECKOUT_API_BASE_URL}/tickets`;
export const PURCHASE = `${CHECKOUT_API_BASE_URL}/purchases`;

const makeHeaders = () =>
  new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

export const get = (url, parameters) => {
  const urlObject = new URL(url);

  if (parameters) {
    Object.keys(parameters).forEach(key => urlObject.searchParams.append(key, parameters[key]));
  }

  return fetch(urlObject.toString());
};

export const post = (url, data) => {
  return fetch(url, {
    headers: makeHeaders(),
    method: 'POST',
    body: JSON.stringify(data)
  });
};
