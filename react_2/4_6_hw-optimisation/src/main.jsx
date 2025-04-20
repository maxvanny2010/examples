import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<MantineProvider withGlobalStyles
					 withNormalizeCSS>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MantineProvider>,
);
