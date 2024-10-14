import React from 'react';
import img from '../../assets/calculator.png';
import styles from './App.module.css';

export const App = () => {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const action = ['C', '+', '-', '='];
	const [operand1, setOperand1] = React.useState('');
	const [operand2, setOperand2] = React.useState('');
	const [operator, setOperator] = React.useState('');
	const [result, setResult] = React.useState('');
	const [isGettingResult, setIsGettingResult] = React.useState(false);
	const [isOperatorClicked, setIsOperatorClicked] = React.useState(false);

	const clearStateOperands = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};
	const getResult = () => {
		switch (operator) {
			case '+':
				setResult(String(+operand1 + +operand2));
				break;
			case '-':
				setResult(String(+operand1 - +operand2));
				break;
			default:
				break;
		}
		setIsGettingResult(true);
	};

	const clearAll = () => {
		setIsOperatorClicked(false);
		setIsGettingResult(false);
		clearStateOperands();
		setResult('');
	};

	function getPrevValueWithoutFirstZeroNumber(number, prevOperand) {
		return (number.toString() === '0' && prevOperand.length === 0) ? prevOperand + '' : prevOperand + number.toString();
	}

	const getOnClick = (number) => {
		if (!isGettingResult) {
			isOperatorClicked
				? setOperand2(prevOperand2 =>
					getPrevValueWithoutFirstZeroNumber(number, prevOperand2))
				: setOperand1(prevOperand1 =>
					getPrevValueWithoutFirstZeroNumber(number, prevOperand1));
		}
	};

	const callAction = (actionIndex) => {
		if (isGettingResult) {
			setIsGettingResult(false);
			setIsOperatorClicked(true);
			setOperand1(prevState => prevState + result);
			setOperator(action[actionIndex]);
			setResult('');
		} else if (operand1) {
			setOperator(action[actionIndex]);
			setIsOperatorClicked(true);
		}
	};

	const toNumberButtons = (number) => (
		<td key={number}>
			<button className={`${styles.btn} ${styles.number}`}
					onClick={() => getOnClick(number)}>
				{number}
			</button>
		</td>
	);
	const operatorButton = (actionItem, callback) => (
		<td>
			<button
				id={actionItem}
				className={`${styles.btn} ${styles.operator}`}
				onClick={callback}
			>
				{actionItem}
			</button>
		</td>
	);
	const zeroButton = (number, callback) => (
		<td colSpan="3">
			<button className={`${styles.zero} ${styles.number}`}
					onClick={callback}>
				{number}
			</button>
		</td>
	);
	const operatorResults = (operator, index) => (
		<td key={index}>
			<button id={operator}
					className={`${styles.btn} ${styles.operator}`}
					onClick={() => {
						if (operand1 && operator && operand2) {
							getResult();
							clearStateOperands();
							setOperator(operator);
							setIsOperatorClicked(false);
						}
					}}>
				{operator}
			</button>
		</td>
	);

	let display = <>{
		isGettingResult
			? result
			: `${operand1} ${operator ? operator : ''} ${operand2 ? operand2 : ''}`}
	</>;
	return (
		<main>
			<img src={img}
				 alt="iphone.png" />
			<div className={styles.container}>
				<div className={styles.panel}>
					<p className={isGettingResult ? styles.result : styles.action}>
						{display}
					</p>
				</div>
				<table>
					<tbody>
					<tr>
						{NUMS.slice(7, 10).map(toNumberButtons)}
						{operatorButton(action[0], () => clearAll())}
					</tr>

					<tr>
						{NUMS.slice(4, 7).map(toNumberButtons)}
						{operatorButton(action[1], () => callAction(1))}
					</tr>

					<tr>
						{NUMS.slice(1, 4).map(toNumberButtons)}
						{operatorButton(action[2], () => callAction(2))}
					</tr>
					<tr>
						{zeroButton(0, () => getOnClick(0))}
						{operatorResults(action[3], 3)}
					</tr>
					</tbody>
				</table>
			</div>
		</main>
	);
};
