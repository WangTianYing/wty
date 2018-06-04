// @flow
import { type ComponentType } from 'react';
// import withRedux from 'next-redux-wrapper';
import withRematch from './withRematch';

import initStore from '../store/store';

const initConnectRedux = (mapStateToProps: any = null, mapDispatchToProps: any = null) => (
  (WrappedComponent: ComponentType<any>) => (
    withRematch(initStore, mapStateToProps, mapDispatchToProps)(WrappedComponent)
  )
);


export default initConnectRedux;
