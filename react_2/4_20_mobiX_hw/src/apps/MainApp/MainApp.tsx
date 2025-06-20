import React from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactListPage, ContactPage, FavoriteListPage, GroupListPage, GroupPage } from '../../pages';
import { Layout } from '../../components';

export const MainApp = () => {
	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
			<BrowserRouter>
				<Routes>
					<Route path="/"
						   element={<Layout />}>
						<Route index
							   element={<ContactListPage />} />
						<Route path="contact">
							<Route index
								   element={<ContactListPage />} />
							<Route path=":contactId"
								   element={<ContactPage />} />
						</Route>
						<Route path="groups">
							<Route index
								   element={<GroupListPage />} />
							<Route path=":groupId"
								   element={<GroupPage />} />
						</Route>
						<Route path="favorit"
							   element={<FavoriteListPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
