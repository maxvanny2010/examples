import styles from '../style/App.module.css';
import '../style/index.css';
import React from 'react';

const messageError = 'Введенное значение должно содержать минимум 3 символа';
const messagePrompt = 'Введите значение:';

export default function App() {
	const [value, setValue] = React.useState('');
	const [list, setList] = React.useState([]);
	const [error, setError] = React.useState('');

	const onInputButtonClick = () => {
		const promptValue = prompt(messagePrompt);
		if (promptValue.trim().length <= 3) setError(messageError);
		else {
			setValue(promptValue);
			setError('');
		}
	};
	let isError = error !== '';
	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			{!isError && <p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>
				"
			</p>}
			{isError && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button
					className={styles.button}
					onClick={onInputButtonClick}
				>
					Ввести новое
				</button>
				<button className={styles.button}
						disabled>Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					<li className={styles['list-item']}>Первый элемент</li>
				</ul>
			</div>
		</div>
	);
};



