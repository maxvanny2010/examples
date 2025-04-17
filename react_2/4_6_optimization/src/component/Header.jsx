import { NavLink } from 'react-router-dom';
import { getNavLinkStyle } from '../pages';
import { internalPaths } from '../util';

export const Header = () => {
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
					<li className="li-item"><NavLink
						style={getNavLinkStyle}
						to={internalPaths.about}
					>
						About
					</NavLink>
					</li>
					<li className="li-item">
						<NavLink
							style={getNavLinkStyle}
							to={internalPaths.contact}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};
