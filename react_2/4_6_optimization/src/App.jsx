import { Route, Routes } from 'react-router-dom';
import { Home , About , Contact } from './pages';
import { internalPaths } from './util';
import { Header } from './component';
import './App.css';

export const App = () => {
	return (<>
		<Header />
		<Routes>
			<Route path={internalPaths.home}
				   element={<Home />} />
			<Route path={internalPaths.about}
				   element={<About />} />
			<Route path={internalPaths.contact}
				   element={<Contact />} />
		</Routes>
	</>);
};
