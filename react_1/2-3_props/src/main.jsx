import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Product } from './components/products/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
		<Product name={'phone'}
				 price={1000} />
	</React.StrictMode>,
);
