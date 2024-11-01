import { Route, Routes } from 'react-router-dom';
import { Header } from './component/index.jsx';

import styled from 'styled-components';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	height: 100vh;
`;
const Content = styled.div`
	padding: 120px 0;
`;
const H2 = styled.h2`
	text-align: center;
`;


const Footer = () => <div>Footer</div>;

export default function Blog() {

	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Content of page</H2>
				<Routes>
					<Route path="/"
						   element={<div>Home page</div>}></Route>
					<Route path="/login"
						   element={<div>Authorisation</div>}></Route>
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


