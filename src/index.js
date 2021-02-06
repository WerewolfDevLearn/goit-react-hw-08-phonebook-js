import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import App from './components/App';

import { Provider } from 'react-redux';

import store from './redux/store';
import 'modern-normalize';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
