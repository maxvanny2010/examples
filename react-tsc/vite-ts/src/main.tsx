import { createRoot } from 'react-dom/client';
import { UserProvider } from './context';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<UserProvider>
		<App />
	</UserProvider>,
);
