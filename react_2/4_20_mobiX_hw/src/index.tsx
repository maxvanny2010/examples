import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './apps/MainApp';
import './index.scss';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<MainApp />
	</React.StrictMode>,
);
