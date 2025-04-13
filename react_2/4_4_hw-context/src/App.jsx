import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { PAGE } from './constants';
import { Header } from './component';
import { Episodes, HeroDetail, Heroes, Locations, Main, NotFound, SignIn, SignUp } from './pages';
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
							   element={<Main />} />
						<Route path="*"
							   element={<NotFound />} />
						<Route path={PAGE.LOCATIONS}
							   element={<Locations />} />
						<Route path={PAGE.EPISODES}
							   element={<Episodes />} />
						<Route path={PAGE.HEROES}
							   element={<PrivateRoute><Heroes /></PrivateRoute>} />
						<Route path={`${PAGE.HERO}/:id`}
							   element={<PrivateRoute><HeroDetail /></PrivateRoute>} />
						<Route path={`${PAGE.LOGIN}`}
							   element={<SignIn />} />
						<Route path={PAGE.SIGNUP}
							   element={<SignUp />} />
					</Routes>
				</AppColumn>
			</AuthProvider>
		</AuthCookieProvider>
	);
};
