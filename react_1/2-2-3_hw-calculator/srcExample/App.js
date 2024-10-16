import { useState } from 'react';
import { buttons } from './buttons';
import { BUTTON_GROUP, NUM, OPERATOR } from './constants';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState(NUM.ZERO);
	const [operator, setOperator] = useState(OPERATOR.NONE);
	const [operand2, setOperand2] = useState(NUM.NONE);
	const [isResult, setIsResult] = useState(false);

	const appState = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		isResult,
		setIsResult,
	};

	const screenClassName = styles.screen + (isResult ? ' ' + styles.screenResult : '');
	const output = operand1 + (operator && ' ' + operator) + (operand2 && ' ' + operand2);

	return (
		<div className={styles.app}>
			<div className={screenClassName}>{output}</div>
			<div className={styles.buttons}>
				<div className={styles.buttonsGroupLeft}>
					{buttons.map(({ id, name, group, handler }) =>
						group === BUTTON_GROUP.LEFT ? (
							<button
								className={styles.button}
								key={id}
								onClick={() => handler(appState, name)}
							>
								{name}
							</button>
						) : null,
					)}
				</div>
				<div className={styles.buttonsGroupRight}>
					{buttons.map(({ id, name, group, handler }) =>
						group === BUTTON_GROUP.RIGHT ? (
							<button
								className={styles.button}
								key={id}
								onClick={() => handler(appState)}
							>
								{name}
							</button>
						) : null,
					)}
				</div>
			</div>
		</div>
	);
};
