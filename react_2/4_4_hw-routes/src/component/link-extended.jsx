import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LinkExtendedComponent = ({ to, children }) => {
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
export const LinkExtended = styled(LinkExtendedComponent)`

`;
LinkExtendedComponent.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.string,
};
