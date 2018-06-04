import React from 'react';
import { Route, Switch } from 'react-router-dom';
import KMXComponentsPAS from '@k2data/kmx-components-pas/es';
import { BrowserRouter } from 'react-router-dom';

const env = {
  API_URL: 'http://192.168.132.8:28085/pas/services/',
  DS_URL: 'http://192.168.130.55:8081/data-service/v2/',
  OBJECT_URL: 'http://192.168.130.55:28090/object-rest/',
  AUTHZ_URL: 'http://192.168.130.55:28091/auth-service/v1/',
  USER_URL: '/',
  AUTH_API: true,
  SERVER_PATH: 'https://192.168.130.55:8443',
  SERVICE_PREFIX: 'http://localhost:3000',
  TOKEN: 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTkyQ0JDLUhTMzg0IiwiYWxnIjoiZGlyIn0..tSqN_q7f8S7xSFMl-77VBg._N51OfdHHTLxyqMaqIMBIg1Hukci3_leB1-pfCc6BMDEyOhkwycF12jEauBdL-MfWjHRQRBjlCMM5_XX3hHseJlMBFDv8qYg8fW9vr80nYQjh2xW1x9pfc2s3YUc8F3JAmS3EsAMYURvLsBskjS02-SM_3KiZjllr5YChMZhM1Vlsm9UNastcnLZ-a9dW2rw9o5b41qctJvFhoEbKYh8J9SIdrar8xhISAnR2XgPGvEwp-NBKV4yrMU-3LDEpBo5x4wl1ix32YidUiW_WfcTJQ.1X59wyFCSz6PEUn0gxt9jIwmARWcpnTu',
  queneName: 'root.tenants.dlcDEV@k2data.com.cn',
  USER: 'ae6d8cdKk@yeah.net',
};
const PAS = () => (
  <BrowserRouter basename="/">
    <KMXComponentsPAS env={env}  navMode="top" whiteList={['projects', 'jobs', 'models', 'service']}/>
  </BrowserRouter>
);

const AppLayout = () => (
  <Switch>
    <Route path="/" component={PAS} />
  </Switch>
)

export default AppLayout;
