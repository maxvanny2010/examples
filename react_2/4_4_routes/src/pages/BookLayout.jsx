import { Link, Outlet } from 'react-router-dom';

export function BookLayout() {
	return (
		<>
			<div className="block"><h1>BookList</h1></div>
			<div className="block">
				<ul>
					<li className="li-item-page"><Link to="/books/1">Book1 Low Priority</Link></li>
					<li className="li-item-page"><Link to="/books/2">Book2 Low Priority</Link></li>
					<li className="li-item-page"><Link to="/books/3">Book3 Low Priority</Link></li>
					<li className="li-item-page"><Link to="/books/new">New Book High Priority</Link></li>
				</ul>
			</div>
			<div className="block">
				<Outlet context={{ name: 'React' }} />
			</div>
		</>
	);
}
