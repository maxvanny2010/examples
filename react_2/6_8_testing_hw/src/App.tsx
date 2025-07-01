import { Provider } from 'react-redux';
import { AppInner } from 'src/AppInner';
import { store } from 'src/store/configureStore';
import './styles.css';

export const App = () => (
	<Provider store={store}>
		<AppInner />
	</Provider>
);
