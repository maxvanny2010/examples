import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import './index.css';
import { store } from './store.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
