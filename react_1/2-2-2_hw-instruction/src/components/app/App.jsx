import styles from './app.module.css';
import data from '../../utils/data.json';
import { useState } from 'react';

export const App = () => {
	// задать 2 состояния — steps и activeIndex
	const [step, setStep] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
	const forward = () => {
		if (activeIndex < (step.length - 1)) setActiveIndex(activeIndex + 1);
	};
	const back = () => {
		if (activeIndex > 0) setActiveIndex(activeIndex - 1);
	};
	const start = () => setActiveIndex(0);

	// 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	let isFirsStep = activeIndex === 0;
	let isLastStep = activeIndex === (step.length - 1);
	// set done/active classes for li and button
	let getClassesActive = (extraClass, classesDoneActive) => `${styles[`steps-item${extraClass}`]}  ${classesDoneActive}`;
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{step[activeIndex].content}
					</div>

					<ul className={styles['steps-list']}>
						{
							step.map(({ id, title, content }, index) => {
								let classesDoneActive = `${index <= activeIndex ? styles.done : ''}  ${index === activeIndex ? styles.active : ''}`;
								return (
									<li className={getClassesActive('', classesDoneActive)}
										key={id}>
										<button className={getClassesActive('-button', classesDoneActive)}
												onClick={() => {
													setActiveIndex((index <= (step.length - 1) && index > 0) ? index : 0);
												}}>{index + 1}</button>
										{title}
									</li>
								);
							})
						}
					</ul>


					<div className={styles['buttons-container']}>
						<button className={styles.button}
								onClick={back}
								disabled={isFirsStep}>Назад
						</button>
						<button className={styles.button}
								onClick={isLastStep ? start : forward}
						>
							{isLastStep ? 'Начать с начала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
