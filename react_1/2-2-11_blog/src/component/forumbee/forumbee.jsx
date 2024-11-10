import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../header/components/icon/icon.jsx';
import { useNavigate } from 'react-router-dom';

const ForumbeeComponent = ({ className, size, id }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<Icon size={size}
				  id={`fa-${id}`}
				  margin="20px 20px 0 0"
				  onClick={() => navigate('/')}
			/>
		</div>
	);
};
export const Forumbee = styled(ForumbeeComponent)`
	display: flex;
	justify-content: center;
`;
ForumbeeComponent.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	id: PropTypes.string,
};
