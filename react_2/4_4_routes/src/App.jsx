import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { BookList } from './pages/BookList.jsx';
import { Contact } from './pages/Contact.jsx';
import { Book } from './pages/Book.jsx';
import './App.css';
import { NewBook } from './pages/NewBook.jsx';
import { NotFound } from './pages/NotFound.jsx';

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
				   element={<Home />}></Route>
			<Route path="/about"
				   element={<About />}></Route>
			<Route path="/books"
				   element={<BookList />}></Route>
			<Route path="/books/:id/:img?"
				   element={<Book />}></Route>
			<Route path="/books/new"
				   element={<NewBook />}></Route>
			<Route path="/contact"
				   element={<Contact />}></Route>
			<Route path="*"
				   element={<NotFound />}></Route>
		</Routes>
	</>);
};
