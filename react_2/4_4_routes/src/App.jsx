import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { BookRoutes } from './pages/BookRoutes.jsx';
import { getNavLinkStyle } from './pages/LinkStyle.jsx';
import './App.css';

export const App = () => {
	return (<>
		<div className="header">
			<div className="links">
				<ul>
					<li className="li-item">
						<NavLink
							style={getNavLinkStyle}
							to="/"
							//	state={{ path: '/' }}
							state="Hi state"
						>
							Home
						</NavLink>
					</li>
					<li className="li-item"><NavLink
						style={({ isActive }) => {
							console.log('###: isActive ', isActive);
							return isActive ? {
								color: 'red',
							} : {};
						}}
						to="/about">About</NavLink></li>
					<li className="li-item">
						<NavLink
							className={({ isActive }) => (
								isActive ? 'white' : ''
							)}
							to="/books"
							end
						>
							{({ isActive }) => isActive ? 'BookList' : 'Books'}
						</NavLink>
					</li>
					<li className="li-item"><NavLink to="/contact">Contact</NavLink></li>

				</ul>
			</div>
		</div>
		<Routes>
			<Route path="/"
				   element={<Home />} />
			<Route path="/about"
				   element={<About />} />
			<Route path="/books/*"
				   element={<BookRoutes />} />
			<Route path="/contact"
				   element={<Contact />} />
			<Route path="*"
				   element={<NotFound />} />
		</Routes>
	</>);
};
