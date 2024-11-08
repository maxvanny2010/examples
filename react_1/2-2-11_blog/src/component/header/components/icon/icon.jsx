import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = ({ className, id, ...props }) => (
	<div className={className}
		 {...props}
	>
		<i className={`fa ${id}`}
		   aria-hidden="true"
		>
		</i>
	</div>
);

export const Icon = styled(IconContainer)`
	cursor: pointer;
	padding-left: ${({ padding = '20px' }) => padding};
	line-height: 48px;
	font-weight: 600;
	font-size: ${({ size = '20px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled = 'lightgrey' }) => (disabled ? '#ccc' : 'black')};
	transition: box-shadow 0.25s, color 0.25s;

	&:hover {
		cursor: ${({ inactive }) => (inactive ? 'default' : 'pointer')};
	}

	&:active {
		color: ${({ inactive }) => (inactive ? 'lightgrey' : '#8DCC0A')};
		transform: ${({ inactive }) => (inactive ? 'default' : 'scale(0.95)')};
	}
`;

IconContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
