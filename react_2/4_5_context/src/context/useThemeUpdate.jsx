import { createContext, useContext } from 'react';


export const ThemeContextUpdate = createContext();

export function useThemeUpdate() {
	return useContext(ThemeContextUpdate);
}
