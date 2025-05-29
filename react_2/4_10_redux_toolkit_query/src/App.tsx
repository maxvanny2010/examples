import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { Cart, Header, ParentComponent } from './components';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}
						 loading={<div>Loading...</div>}>
				<div className="App">
					<Header />
					<Cart />
					<ParentComponent />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
