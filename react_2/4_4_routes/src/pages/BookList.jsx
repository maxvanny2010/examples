import { Link } from 'react-router-dom';

export function BookList() {
	return (
		<>
			<div className="block"><h1>BookList</h1></div>
			<div className="block">
				<ul>
					<li className="li-item-page"><Link to="/books/1">Book1</Link></li>
					<li className="li-item-page"><Link to="/books/2">Book2</Link></li>
					<li className="li-item-page"><Link to="/books/3">Book3</Link></li>
				</ul>
			</div>
		</>
	);
}
