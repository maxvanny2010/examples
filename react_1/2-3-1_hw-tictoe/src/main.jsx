import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './components/game/Game.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	/*<React.StrictMode>*/  /* this made double render and have given me not correct data of score after win*/
	<Game />,
	/*	</React.StrictMode>,*/
);
