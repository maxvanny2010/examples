import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Product } from './components/products/Product';
import { AppContainer } from './components/statefull/AppContainer';
import { Parent } from './components/counter/Parent.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
		<Product name={'phone'}
				 price={1000} />
		<AppContainer />
		<Parent />
	</React.StrictMode>,
);
