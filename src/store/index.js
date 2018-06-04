import { init } from '@rematch/core';
import thunkMiddleware from 'redux-thunk';
import pasReducers from '@k2data/kmx-components-pas/lib/reducers';

export default init({
  models: { },
  redux: {
    reducers: {
      ...pasReducers,
    },
    middlewares: [thunkMiddleware],
  },
});
