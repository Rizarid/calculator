import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { store } from './redux/store';
import App from './App';

import './index.css';

const container = document.getElementById('root');
const root = container && createRoot(container);
root && root.render((
  <Provider store={store}>
    <App />
  </Provider>
));
