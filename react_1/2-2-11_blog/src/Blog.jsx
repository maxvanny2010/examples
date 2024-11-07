import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './component';

import styled from 'styled-components';
import { Authorization, Post, Registration, Users } from './pages';
import { useLayoutEffect } from 'react';
import { setUser } from './redux/action/index.jsx';
import { useDispatch } from 'react-redux';

const AppColumn = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #282c34;
    width: 1000px;
    height: 100vh;
`;

const Page = styled.div`
    padding: 120px 0 20px;
`;


export default function Blog() {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const userData = sessionStorage.getItem('userData');
		if (!userData) return;
		const currentUser = JSON.parse(userData);
		dispatch(setUser(
			{
				...currentUser,
				roleId: Number(currentUser.roleId),
			}));
	}, [dispatch]);
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/"
						   element={<div>Home page</div>}></Route>
					<Route path="/login"
						   element={<Authorization />}></Route>
					<Route path="/signup"
						   element={<Registration />}></Route>
					<Route path="/users"
						   element={<Users />}></Route>
					<Route path="/post/:id"
						   element={<Post />}></Route>
					<Route path="/post"
						   element={<div>New Post</div>}></Route>
					<Route path="*"
						   element={<div>404</div>}></Route>
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};


