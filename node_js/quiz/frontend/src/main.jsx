import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.jsx';
import Test from './Test.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Initial Redux store state:', store.getState());
root.render(
	<React.StrictMode>
		<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Provider store={store}>
				<Test />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
