import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import notFoundImage from '../assets/img/not-found.webp';
import { HeaderPage } from '../component';
import { TITLE } from '../constants';

const NotFoundPage = ({ className }) => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		setTimeout(() => {
			navigate('/', { state: location.pathname });
		}, 1000);
	}, [navigate, location.pathname]);
	return (
		<div className={className}>
			<HeaderPage title={TITLE.PAGE_NOT_FOUND} />
			<div className="not-found">
				<img src={notFoundImage}
					 alt="Not found"
					 width="100%" />
			</div>
		</div>
	);
};
const NotFound = styled(NotFoundPage)`
	padding: 50px;
	height: 100%;

	.not-found {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: lightgray;
		color: #1e1e1e;
		font-weight: normal;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		padding: 4px;
		text-align: center;
		flex: 1 1 1000px;
		max-width: 1000px;
		margin: 10px;
		box-sizing: border-box;
	}
`;
export default NotFound;
NotFoundPage.propTypes = {
	className: PropTypes.string,
};
