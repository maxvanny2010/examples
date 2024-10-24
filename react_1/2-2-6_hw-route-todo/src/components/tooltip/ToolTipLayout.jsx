import style from './ToolTipLayout.module.css';

export const ToolTipLayout = ({ errorMessage }) => {
	return (
		<span className={style.errorsMessage}>{errorMessage}</span>
	);
};
