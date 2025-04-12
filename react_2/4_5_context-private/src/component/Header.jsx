import { NavLink } from 'react-router-dom';
import { getNavLinkStyle } from '../pages';
import { internalPaths } from '../util';

export function Header() {
	return (
		<div className="header">
			<div className="links">
				<ul>
					<li className="li-item">
						<NavLink
							style={getNavLinkStyle}
							to={internalPaths.home}
						>
							Home
						</NavLink>
					</li>
					<li className="li-item">
						<NavLink
							style={getNavLinkStyle}
							to={internalPaths.about}
						>
							About
						</NavLink>
					</li>
					<li className="li-item">
						<NavLink
							style={getNavLinkStyle}
							to={internalPaths.books}
							end
						>
							Books
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
