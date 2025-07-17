import React from 'react';
import { App } from './App';
import ReactDOMClient from 'react-dom/client';

const data = window._INITIAL_DATA_;
console.log(data);
ReactDOMClient.hydrateRoot(document.getElementById('root'), <App data={data} />);

