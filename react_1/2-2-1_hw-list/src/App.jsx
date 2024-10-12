import styles from '../style/App.module.css';
import '../style/index.css';
import React from 'react';
import moment from 'moment';

const messageError = 'Введенное значение должно содержать минимум 3 символа';
const messagePrompt = 'Введите значение:';

const format = 'DD.MM.YYYY HH:mm:ss';

export default function App() {
	const [value, setValue] = React.useState('');
	const [list, setList] = React.useState([]);
	const [error, setError] = React.useState('');

	const isValueValid = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt(messagePrompt);
		if (promptValue.trim().length > 3) {
			setValue(promptValue);
			setError('');
		} else {
			setError(messageError);
		}
	};
	const onAddButtonClick = () => {
		if (isValueValid) {
			//	const updateList = [...list, { id: Date.now(), value: value }];
			let time = moment().format(format);
			setList(list => [...list, {
				id: Date.now(),
				time: time,
				value: value,
			}]);
			setValue('');
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
						onClick={onAddButtonClick}
						disabled={!isValueValid}>Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{
					list.length === 0 &&
					<p className={styles['no-margin-text']}>
						Нет добавленных элементов
					</p>
				}
				<ul className={styles.list}>
					{
						list.map(({ id, time, value }) =>
							(
								<li className={styles['list-item']}
									key={id}
								>
									{`[${time}] :: ${value}`}
								</li>
							),
						)
					}
				</ul>
			</div>
		</div>
	);
};



