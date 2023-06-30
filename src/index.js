import React from 'react';
import ReactDOM from 'react-dom/client';
import clevertap from 'clevertap-web-sdk';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

clevertap.init('44K-777-456Z');
clevertap.setLogLevel(3);
const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyDYJS8RGDhykzrayLVPlaWB_sl5O5yJ-WA",
  authDomain: "ctwebsdk-9d9d8.firebaseapp.com",
  projectId: "ctwebsdk-9d9d8",
  storageBucket: "ctwebsdk-9d9d8.appspot.com",
  messagingSenderId: "512108197835",
  appId: "1:512108197835:web:105b7a939cf2977ff8e84e",
  measurementId: "G-XM671E1PVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
clevertap.notifications.push({

  "titleText":'Would you like to receive Push Notifications?',
  "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
  "okButtonText":'Sign me up!',
  "rejectButtonText":'No thanks',
  "okButtonColor":'#F28046',
  });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
