import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './component/index.jsx';

import styled from 'styled-components';
import { Authorization } from './pages/index.jsx';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #282c34;
	width: 1000px;
	height: 100vh;
`;

const Content = styled.div`
	padding: 120px 0;
`;


export default function Blog() {

	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/"
						   element={<div>Home page</div>}></Route>
					<Route path="/login"
						   element={<Authorization />}></Route>
					<Route path="/register"
						   element={<div>Registration</div>}></Route>
					<Route path="/users"
						   element={<div>Users</div>}></Route>
					<Route path="/post/:postid"
						   element={<div>Post</div>}></Route>
					<Route path="/post"
						   element={<div>New Post</div>}></Route>
					<Route path="*"
						   element={<div>404</div>}></Route>
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};


