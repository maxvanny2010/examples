import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Error, Header, Login, Main, Record, Records } from './pages';
import { useSelector } from 'react-redux';
import { isAuthenticated } from './redux/selectors';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	background-color: #282c34;
	width: 1000px;
	min-height: 100vh;
`;

const Page = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	padding-top: 50px;
	margin: 0 auto;
	width: 51%;
`;
export default function App() {
	const authenticated = useSelector(isAuthenticated);
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/"
						   element={<Main />} />
					<Route path="/record"
						   element={<Record />} />
					{authenticated && <Route path="/records"
											 element={<Records />} />}
					<Route path="/login"
						   element={<Login />} />
					<Route path="*"
						   element={<Error />} />
				</Routes>
			</Page>
		</AppColumn>

	);
};



