import ReactDOM from 'react-dom/client';
import { Array, Debounce, Storage, Throttle, Timeout, Toggle, UpdateEffect } from './index.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<Storage />
		<Toggle />
		<Timeout />
		<Debounce />
		<UpdateEffect />
		<Array />
		<Throttle />
	</>,
);
