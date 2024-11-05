import styled from 'styled-components';
import PropTypes from 'prop-types';

const TableRowContainer = ({ className, children }) => (
	<div className={className}>{children}</div>

);
export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	border: ${({ border }) => (border ? '1px solid #435E0A' : 'none')};
	border-radius: 5px;

	& > select {
		height: 20px;
	}

	& > div {
		display: flex;
		padding: 0 10px;

	}

	& .login-column {
		width: 172px;
	}

	& .registered-at-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`;
TableRowContainer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
