import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Stateprovider } from './utils/stateprovider';
import reducer, { initialState } from './utils/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stateprovider initialState={initialState} reducer={reducer}>
    <App />

    </Stateprovider>
  </React.StrictMode>,
  document.getElementById("root")
);

