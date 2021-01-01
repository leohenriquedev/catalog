import React from 'react';
import ReactDOM from 'react-dom';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
