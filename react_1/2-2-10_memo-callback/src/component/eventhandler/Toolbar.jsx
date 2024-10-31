import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';

function Button({ onClick, children }) {
	return (
		<button className={styles.element}
				onClick={onClick}>
			{children}
		</button>
	);
}

function PlayButton({ movieName }) {
	function handlePlayClick() {
		alert(`Playing ${movieName}!`);
	}

	return (
		<Button onClick={handlePlayClick}>
			Play {movieName}
		</Button>
	);
}

function UploadButton() {
	return (
		<Button onClick={() => alert('Uploading!')}>
			Upload Image
		</Button>
	);
}

export const Toolbar = () => {
	return (
		<div className={styles.container}>
			<PlayButton movieName="Kiki's Delivery Service" />
			<br />
			<UploadButton />
		</div>
	);
};
Toolbar.propTypes = {
	movieName: PropTypes.string,
};
PlayButton.propTypes = {
	movieName: PropTypes.string,
};
UploadButton.propTypes = {
	movieName: PropTypes.string,
};
Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
};
