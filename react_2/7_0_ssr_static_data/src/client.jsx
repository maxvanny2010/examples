import React from 'react';
import { App } from './App';
import ReactDOMClient from 'react-dom/client';

App.getServerSideProps()
	.then((data) => {
		ReactDOMClient.hydrateRoot(
			document.getElementById('root'), <App data={data} />);
	});

