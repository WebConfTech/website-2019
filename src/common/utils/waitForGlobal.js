import { deferred } from './deferred';

export const waitForGlobal = (name, intervalTime = 600, attempts = 5) => {
  const defer = deferred();
  let currentAttempt = 0;
  let interval = setInterval(() => {
    currentAttempt++;
    if (global[name]) {
      defer.resolve(global[name]);
      clearInterval(interval);
      interval = null;
    } else if (currentAttempt === attempts) {
      defer.reject(new Error(`Missing global '${name}'`));
      clearInterval(interval);
      interval = null;
    }
  }, intervalTime);

  return defer.promise;
};
