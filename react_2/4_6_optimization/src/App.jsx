import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, InfinityScroll } from './pages';
import { internalPaths } from './util';
import { Header } from './component';
import './App.css';

const Contact = lazy(() => import('./pages/Contact.jsx'));
export const App = () => {
	return (<>
		<Header />
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path={internalPaths.home}
					   element={<Home />} />
				<Route path={internalPaths.infinity}
					   element={<InfinityScroll />} />
				<Route path={internalPaths.contact}
					   element={<Contact />} />
			</Routes>
		</Suspense>
	</>);
};
