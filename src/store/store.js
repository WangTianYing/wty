import { init } from '@rematch/core';
import thunkMiddleware from 'redux-thunk';
import pasReducers from '@k2data/kmx-components-pas/lib/reducers';

const initStore = (initialState = {}) => init({
  models: { },
  redux: {
    initialState,
    reducers: {
      ...pasReducers,
    },
    middlewares: [thunkMiddleware],
  },
});

export default initStore;
