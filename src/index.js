import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FormWithCUstomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/LayoutEffect';
// import { Memorize } from './components/06-memos/Memorize';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { CounteWithCustomHook } from './components/01-useState/CounerWithCustomHook';
// import { Counterpp } from './components/01-useState/Counterpp';
// import {HooksApp} from './HooksApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CallbackHook/>
  </React.StrictMode>
);
