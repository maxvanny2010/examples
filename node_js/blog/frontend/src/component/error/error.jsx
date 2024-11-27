import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Forumbee } from '../forumbee/forumbee.jsx';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 18px;

	& h2 {
		margin: 5px 0 5px 0;
	}
`;
export const Error = ({ error }) =>
	error
	&& (
		<Div>
			<Forumbee size="24px"
					  id={'forumbee'} />
			<h2>MISTAKE</h2>
			<div className="error-content">{error}</div>
		</Div>
	);

Error.propTypes = {
	error: PropTypes.string,
};
