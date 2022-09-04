import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counterpp } from './components/01-useState/Counterpp';
// import {HooksApp} from './HooksApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counterpp />
  </React.StrictMode>
);
