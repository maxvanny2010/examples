import style from './ToolTipLayout.module.css';
import { useContext } from 'react';
import { AppContext } from '../context/indexContext.jsx';

export const ToolTipLayout = () => {
	const { errorMessage } = useContext(AppContext);
	return (
		<span className={style.errorsMessage}>{errorMessage}</span>
	);
};
