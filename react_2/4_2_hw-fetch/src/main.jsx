import ReactDOM from 'react-dom/client';
import { Fetch } from './Fetch.jsx';
import { Storage } from './Storage.jsx';
import { Hover } from './Hover.jsx';
import { Scroll } from './Scroll.jsx';
import { Toggle } from './Toggle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<Fetch />
		<Storage />
		<Hover />
		<Scroll />
		<Toggle />
	</>,
);
