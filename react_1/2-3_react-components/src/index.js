import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComponentAndJSX, ComponentWithNull } from './components/Components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ComponentAndJSX />
		<ComponentWithNull />
	</React.StrictMode>,
);
