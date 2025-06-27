// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppRouter'; // 👈 OR update to match new filename
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
