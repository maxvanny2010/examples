import { useTheme } from '../context/useTheme.jsx';
import { useThemeUpdate } from '../context/useThemeUpdate.jsx';
import PropTypes from 'prop-types';

function getTheme(theme) {
	return {
		background: theme ? '#000' : '#fff',
		color: theme ? '#fff' : '#000',
		marginBottom: '10px',
		padding: '10px',
	};
}

export const FunctionComponent = ({ title }) => {
	const dark = useTheme();
	const changeTheme = useThemeUpdate();
	return (
		<div style={getTheme(dark)}>
			<h1>Function Component {title}</h1>
			<button onClick={changeTheme}>Change Theme {title}</button>
		</div>
	);
};
FunctionComponent.propTypes = {
	title: PropTypes.string,
};
