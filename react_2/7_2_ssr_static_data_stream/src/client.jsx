import { App } from './App';
import React from 'react';
import ReactDOMClient from 'react-dom/client';

const root = document.getElementById('root');
const data = window.__DATA__; // получаем серверные данные

ReactDOMClient.hydrateRoot(root, <App initialData={data} />);
