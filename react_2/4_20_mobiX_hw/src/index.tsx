import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './ducks/store';
import { MainApp } from './apps/MainApp';

import './index.scss';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<div>Loading...</div>}
						 persistor={persistor}>
				<MainApp />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
