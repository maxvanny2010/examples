import { NavLink } from 'react-router-dom';
import { getNavLinkStyle } from './LinkStyle.jsx';
import PropTypes from 'prop-types';
import { internalPaths } from '../util/internalPaths.jsx';

export function BookList({ value }) {
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
							to={internalPaths.book(value)}>Book{value} Low Priority
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

BookList.propTypes = {
	value: PropTypes.number.isRequired,
};
