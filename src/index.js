import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/es/style/index.css';
import 'jointjs/dist/joint.css';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
