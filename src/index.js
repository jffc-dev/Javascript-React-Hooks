import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormWithCUstomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounteWithCustomHook } from './components/01-useState/CounerWithCustomHook';
// import { Counterpp } from './components/01-useState/Counterpp';
// import {HooksApp} from './HooksApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormWithCUstomHook />
  </React.StrictMode>
);
