import { waitForGlobal } from './utils';

let client;
const getClient = () => {
  if (client) {
    return Promise.resolve(client);
  }

  return waitForGlobal('ga').then(gaClient => {
    client = gaClient;
    return client;
  });
};

export const trackEvent = (category, action, label, value) => {
  if (process.env.NODE_ENV === 'production') {
    getClient()
      .then(gaClient => {
        gaClient('send', 'event', category, action, label, value);
      })
      .catch(error => {
        console.error('Unable to track event:', error.message);
      });
  }
};
