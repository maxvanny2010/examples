import { Link, Route, Routes } from 'react-router-dom';
import { Book } from './pages/Book.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { NewBook } from './pages/NewBook.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { BookList } from './pages/BookList.jsx';
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
			<!-- Wrong Routes don't support -> <h1></h1>-->
			<Route path="/"
				   element={<Home />}></Route>
			<Route path="/about"
				   element={<About />}></Route>
			<Route path="/books">
				<Route index
					   element={<BookList />}></Route>
				<Route path=":id"
					   element={<Book />}></Route>
				<Route path="new"
					   element={<NewBook />}></Route>
			</Route>
			<Route path="/contact"
				   element={<Contact />}></Route>
			<Route path="*"
				   element={<NotFound />}></Route>
		</Routes>
	</>);
};
