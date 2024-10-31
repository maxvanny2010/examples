import style from './Toolbar.module.css';
import styles from './Toolbar.module.css';
import PropTypes from 'prop-types';

export const Toolbar2 = () => {
	return (
		<Toolbar
			onPlayMovie={() => alert('Playing!')}
			onUploadImage={() => alert('Uploading!')}
		/>
	);
};

function Toolbar({ onPlayMovie, onUploadImage }) {
	console.log('Toolbar');
	return (
		<div className={style.container}>
			<Button onClick={onPlayMovie}>
				Play Movie
			</Button>
			<Button onClick={onUploadImage}>
				Upload Image
			</Button>
		</div>
	);
}

function Button({ onClick, children }) {
	console.log('Button');
	return (
		<button className={styles.element}
				onClick={onClick}>
			{children}
		</button>
	);
}

Toolbar.propTypes = {
	movieName: PropTypes.string,
	onUploadImage: PropTypes.func,
	onPlayMovie: PropTypes.func,
};
Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
};
