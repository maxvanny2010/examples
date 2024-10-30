import style from './ToolTipLayout.module.css';
import { useSelector } from 'react-redux';

export const ToolTipLayout = () => {
	const errorMessage = useSelector(state => state.stateError.errors[0]);
	return (
		<span className={style.errorsMessage}>{errorMessage}</span>
	);
};
