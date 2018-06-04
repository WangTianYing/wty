import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// may be not suitable for ssr.
// should use cookie storage with ssr.
// v5 not works good with next.js, use v4.
// but v4 does not has cookie storage 😢.
// try v5 and cookie storage 💪.
// 😠, cookie storage only support v4 ?
// 😧 不用了。

import reducer from './reducer';

const initialState = {};

const initStore = (state = initialState) => {
  const store = createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  return store;
};

export default initStore;
