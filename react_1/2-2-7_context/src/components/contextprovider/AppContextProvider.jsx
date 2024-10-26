import { ThemeContext } from '../context/ThemeContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import { AppConfigContext } from '../context/AppConfigContext.jsx';

export const AppContextProvider = ({
									   // eslint-disable-next-line react/prop-types
									   themeValue,
									   // eslint-disable-next-line react/prop-types
									   userValue,
									   // eslint-disable-next-line react/prop-types
									   appConfigValue,
									   // eslint-disable-next-line react/prop-types
									   children,
								   }) => (
	<ThemeContext.Provider value={themeValue}>
		<UserContext.Provider value={userValue}>
			<AppConfigContext.Provider value={appConfigValue}>
				{children}
			</AppConfigContext.Provider>
		</UserContext.Provider>
	</ThemeContext.Provider>
);
