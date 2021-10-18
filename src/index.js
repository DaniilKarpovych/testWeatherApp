import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/query';
import { SettingProvider } from './lib/settingContext';

ReactDOM.render(
  <QueryClientProvider client = { queryClient }>
  <SettingProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SettingProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);



