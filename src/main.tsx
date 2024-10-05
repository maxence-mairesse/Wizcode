import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import './styles/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './components/App/App';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
