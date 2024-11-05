import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = ({ className, id, ...props }) => (
	<div className={className}>
		<i className={`fa ${id}`}
		   aria-hidden="true"
		   onClick={props.onClick}
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
        color: #8DCC0A;
        text-shadow: 0 0 2px 1px #8DCC0A;
    }

    &:active {
        color: #8DCC0A;
        border-color: #8DCC0A;
        transform: scale(0.95);
    }
`;

IconContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
