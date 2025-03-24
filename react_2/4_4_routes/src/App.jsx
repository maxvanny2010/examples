import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { BookRoutes } from './pages/BookRoutes.jsx';
import './App.css';

export const App = () => {
	return (<>
		<div className="header">
			<div className="links">
				<ul>
					<li className="li-item"><Link to="/">Home</Link></li>
					<li className="li-item"><Link to="/about">About</Link></li>
					<li className="li-item"><Link to="/books">BookList</Link></li>
					<li className="li-item"><Link to="/contact">Contact</Link></li>

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
