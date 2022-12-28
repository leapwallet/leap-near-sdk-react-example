import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LeapNearSDKService from './services/LeapNearSDKService';
import Bridge from './services/Bridge';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

(window as any).openRamper = LeapNearSDKService.openRamper;
(window as any).openWeb3Auth = LeapNearSDKService.openWeb3Auth;
(window as any).onReceiveMessage = Bridge.onReceiveMessage;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
