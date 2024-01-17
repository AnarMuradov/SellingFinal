import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import BasketProvider from './Context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
    <HelmetProvider>
    <App />
      </HelmetProvider>
    </BasketProvider>
  </React.StrictMode>
);
