import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Blog from './Blog.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Initial Redux store state:', store.getState());
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Blog />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
