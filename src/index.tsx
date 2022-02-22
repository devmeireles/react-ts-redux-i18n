import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import "./i18n"
import App from './App';
import Routes from './defaults/routes';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
