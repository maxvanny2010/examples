import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { PAGE } from './constants';
import { Component, Header } from './component';
import { AuthCookieProvider, AuthProvider, PrivateRoute } from './context';

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

export const App = () => {
	return (
		<AuthCookieProvider>
			<AuthProvider>
				<AppColumn>
					<Header />
					<Routes>
						<Route path={PAGE.HOME}
							   element={<Component name="Main" />} />
						<Route path="*"
							   element={<Component name="NotFound" />} />
						<Route path={PAGE.LOCATIONS}
							   element={<Component name="Locations" />} />
						<Route path={PAGE.EPISODES}
							   element={<Component name="Episodes" />} />
						<Route path={PAGE.HEROES}
							   element={<PrivateRoute><Component name="Heroes" /></PrivateRoute>} />
						<Route path={`${PAGE.HERO}/:id`}
							   element={<PrivateRoute><Component name="HeroDetail" /></PrivateRoute>} />
						<Route path={`${PAGE.LOGIN}`}
							   element={<Component name="SignIn" />} />
						<Route path={PAGE.SIGNUP}
							   element={<Component name="SignUp" />} />
					</Routes>
				</AppColumn>
			</AuthProvider>
		</AuthCookieProvider>
	);
};
