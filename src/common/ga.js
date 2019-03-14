import { waitForGlobal } from './utils';

let client;
const getClient = async () => {
  if (client) {
    return Promise.resolve(client);
  }

  const gaClient = await waitForGlobal('ga');
  client = gaClient;
  return client;
};

export const trackEvent = async (category, action, label, value) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  try {
    const gaClient = await getClient();
    gaClient('send', 'event', category, action, label, value);
  } catch (error) {
    console.error('Unable to track event:', error.message);
  }
};
