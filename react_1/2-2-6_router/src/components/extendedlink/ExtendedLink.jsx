import { NavLink } from 'react-router-dom';

export const ExtendedLink = ({ to, children }) => {

	return (
		<NavLink to={to}>
			{
				({ isActive }) => isActive
					? (
						<>
							<span>{children}</span>
							<span>*</span>
						</>
					) : (children)
			}
		</NavLink>
	);
};



