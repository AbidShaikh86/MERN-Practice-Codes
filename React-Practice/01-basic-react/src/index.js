import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoToReact from './DemoToReact';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <DemoToReact />
      <App />
    </>
);

reportWebVitals();
