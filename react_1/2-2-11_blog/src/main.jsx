import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Blog from './Blog.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Blog />
		</BrowserRouter>
	</React.StrictMode>,
);
