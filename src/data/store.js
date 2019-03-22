import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import appReducers from './reducers';

export function configureStore() {
  // localstare configuration
  const localStorageConf = {
    namespace: 'webconf',
    states: ['checkout'],
    debounce: 500
  };

  // create store
  const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    appReducers,
    load(localStorageConf),
    composeEnhancers(applyMiddleware(thunk, save(localStorageConf)))
  );

  return store;
}
