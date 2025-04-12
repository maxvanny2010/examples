import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './useTheme.jsx';
import { ThemeContextUpdate } from './useThemeUpdate.jsx';

export function ThemeProvider({ children }) {
	const [dark, setDark] = useState(false);
	const handleChangeDark = () => setDark(s => !s);
	return (
		<ThemeContext.Provider value={dark}>
			<ThemeContextUpdate.Provider value={handleChangeDark}>
				{children}
			</ThemeContextUpdate.Provider>
		</ThemeContext.Provider>
	);
}

ThemeProvider.propTypes = {
	children: PropTypes.any,
};
