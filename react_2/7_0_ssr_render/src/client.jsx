import React from 'react';
import { App } from './App';
import ReactDOMClient from 'react-dom/client';

ReactDOMClient.hydrateRoot(document.getElementById('root'), <App />);
