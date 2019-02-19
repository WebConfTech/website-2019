import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from 'src/data/store';

export const provideRedux = ({ element }) => {
  const store = configureStore();
  return <Provider store={store}>{element}</Provider>;
};
