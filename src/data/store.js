import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import appReducers from './reducers';

export function configureStore() {
  // localstare configuration
  const localStorageConf = {
    namespace: 'webconf',
    states: ['checkout'],
    debounce: 100
  };

  // initial state
  const initialState = typeof window !== 'undefined' ? load(localStorageConf) : {};

  // create store
  const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(
    appReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk, save(localStorageConf)))
  );

  return store;
}
