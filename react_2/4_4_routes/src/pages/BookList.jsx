import { NavLink } from 'react-router-dom';
import { getNavLinkStyle } from './LinkStyle.jsx';

export function BookList() {
	return (
		<>
			<div className="block"><h1>BookList</h1></div>
			<div className="block">
				<ul>
					<li className="li-item-page">
						<NavLink
							style={getNavLinkStyle}
							to="/books/1">Book1 Low Priority
						</NavLink>
					</li>
					<li className="li-item-page">
						<NavLink
							style={getNavLinkStyle}
							to="/books/2">Book2 Low Priority
						</NavLink>
					</li>
					<li className="li-item-page">
						<NavLink
							style={getNavLinkStyle}
							to="/books/3">Book3 Low Priority
						</NavLink>
					</li>
					<li className="li-item-page">
						<NavLink
							style={getNavLinkStyle}
							to="/books/new">New Book High Priority
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}
