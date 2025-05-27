import {PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { persistor, store } from './store';
import { MainApp } from './apps/MainApp';
import { Provider } from 'react-redux';
import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
			<MainApp />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

