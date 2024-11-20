import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { EditTest, Main, Result, StartTest } from './pages/index.jsx';
import { Modal } from './components/index.jsx';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #282c34;
	width: 1000px;
	min-height: 100vh;
`;

const Page = styled.div`
	padding: 20px 0 20px;
	margin: 0 auto;
	width: 50%;
`;
export default function Test() {
	return (
		<AppColumn>
			<Page>
				<Routes>
					<Route path="/"
						   element={<Main />} />
					<Route path="/start"
						   element={<StartTest />} />
					<Route path="/result"
						   element={<Result />} />
					<Route path="/edit"
						   element={<EditTest />} />
				</Routes>
			</Page>
			<Modal />
		</AppColumn>

	);
};



