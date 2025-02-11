import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	ImmutableItem,
	IndexItemBad,
	IndexItemGood,
	LifeCircleRenderBad,
	LifeCircleRenderBadState,
	LifeCircleRenderClass,
	LifeCircleRenderFunction,
} from './index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ImmutableItem />,
	<IndexItemBad />,
	<IndexItemGood />,
	<LifeCircleRenderBad />,
	<LifeCircleRenderBadState />,
	<LifeCircleRenderClass />,
	<LifeCircleRenderFunction />,
);
