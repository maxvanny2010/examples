import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComponentAndJSX, ComponentWithNull } from './components/Components';
import { ComponentState } from './components/ComponentState';
import { ComponentImmutable } from './components/ComponentImmutable';
import { ComponentListRender } from './components/ComponentListRender';
import { ComponentListener } from './components/ComponentListenerEvent';
import { ComponentConditionalRendering } from './components/ComponentConditionalRendering';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ComponentAndJSX />
		<ComponentWithNull />
		<ComponentState />
		<ComponentImmutable />
		<ComponentListRender />
		<ComponentListener />
		<ComponentConditionalRendering />
	</React.StrictMode>,
);
