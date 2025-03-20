import ReactDOM from 'react-dom/client';
import { AuthFormContainer } from './AuthFormContainer.jsx';
import { MantineProvider } from '@mantine/core';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<MantineProvider withGlobalStyles
						 withNormalizeCSS
		>
			<AuthFormContainer />
		</MantineProvider>
	</>,
);
