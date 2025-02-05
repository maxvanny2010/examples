import React from 'react';
import ReactDOM from 'react-dom/client';
import { ComponentAndJSX, ComponentWithNull } from './components/Components';
import { ComponentState } from './components/ComponentState';
import { ComponentImmutable } from './components/ComponentImmutable';
import { ComponentListRender } from './components/ComponentListRender';
import { ComponentListenerEvent } from './components/ComponentListenerEvent';
import { ComponentConditionalRendering } from './components/ComponentConditionalRendering';
import { ComponentModules } from './components/ComponentModules';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ComponentAndJSX />
		<ComponentWithNull />
		<ComponentState />
		<ComponentImmutable />
		<ComponentListRender />
		<ComponentListenerEvent />
		<ComponentConditionalRendering />
		<ComponentModules />
	</React.StrictMode>,
);
