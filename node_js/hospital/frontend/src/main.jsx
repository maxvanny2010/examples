import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App.jsx';
import './index.css';
import { store } from './store.jsx';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Initial Redux store state:', store.getState());
root.render(
	<React.StrictMode>
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
