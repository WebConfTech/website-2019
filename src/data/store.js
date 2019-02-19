import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';

export function configureStore(initialState = {}) {
  // create store
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    appReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
