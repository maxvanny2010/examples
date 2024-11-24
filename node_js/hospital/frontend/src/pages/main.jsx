import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HeaderTitle } from '../components';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../redux/selectors';
import { initUser } from '../bff/operations';

const MainComponent = ({ className }) => {
	const isAuth = useSelector(isAuthenticated);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const checkAuth = async () => {
			setIsLoading(true);
			if (!isAuth) await initUser();
		};
		checkAuth().then(() => setIsLoading(false));
	}, [isAuth]);
	return (
		<div className={className}>
			<HeaderTitle>Index</HeaderTitle>
			<div className="container">
				<div>
					<div className="note-customers">
						<span className="label customer">Customer:</span>
					</div>
					<div className="note-customers">
						<span className="label">Page: Record</span>
					</div>
					<hr />
				</div>
				{isLoading ?
					(
						<div className="note">
							<span className="label">isLoading...</span>
						</div>
					)
					: (
						<div>
							<div className="note-customers">
								<span className="label customer">Manager:</span>
							</div>
							<div className="note-customers">
								<span className="label">Page: Login</span>
							</div>
							<hr />
							<div className="note-customers">
								<span className="label customer">Login: a@a.com</span>
							</div>
							<div className="note-customers">
								<span className="label customer">Password: pass</span>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
};
export const Main = styled(MainComponent)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 20px;
	height: 100%;
	text-align: left;
	color: rgba(255, 255, 255, 0.87);

	.container {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.note-customer {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 55%;
		border-bottom: 1px dotted #ededee;
		margin-bottom: 10px;
	}

	.note {
		display: flex;
		align-items: center;
		width: 55%;
		border-bottom: 1px dotted #ededee;
		margin: 10px 0;
	}

	.label {
		display: block;
		min-width: 120px;
		font-weight: 600;
		margin-bottom: 2px;
	}

	.value {
		flex: 1;
	}

	.customer {
		border-bottom: 1px dotted #ededee;
	}
`;


MainComponent.propTypes = {
	className: PropTypes.string,
};
