import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';

import { Login, Main, Post, Registration, Users } from './pages';
import { Error, Footer, Header, Modal } from './component';
import { setUser } from './redux/action';
import { ERROR, PATH, STORAGE_USER_DATA } from './utils';

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
	padding: 120px 0 20px;
`;


export default function Blog() {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const userData = sessionStorage.getItem(STORAGE_USER_DATA);
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
						   element={<Main />}></Route>
					<Route path={`${PATH.LOGIN}`}
						   element={<Login />}></Route>
					<Route path={`${PATH.REGISTER}`}
						   element={<Registration />}></Route>
					<Route path={`${PATH.USERS}`}
						   element={<Users />}></Route>
					<Route path={`${PATH.POST}`}
						   element={<Post />}>
						<Route index
							   element={<Post />} />
						<Route path=":id"
							   element={<Post />} />
						<Route path=":id/edit"
							   element={<Post />} />
					</Route>
					<Route path="*"
						   element={<Error error={ERROR.PAGE_NOT_EXIT} />}></Route>
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};


