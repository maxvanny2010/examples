import ReactDOM from 'react-dom/client';
import { Fetch } from './Fetch.jsx';
import { Storage } from './Storage.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<Fetch />
		<Storage />
	</>,
);
