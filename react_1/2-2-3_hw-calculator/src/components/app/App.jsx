import React from 'react';
import img from '../../assets/calculator.png';
import styles from './App.module.css';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['C', '+', '-', '='];

export const App = () => {
	const [operand1, setOperand1] = React.useState('');
	const [operand2, setOperand2] = React.useState('');
	const [operator, setOperator] = React.useState('');
	const [result, setResult] = React.useState('');
	const [isGettingResult, setIsGettingResult] = React.useState(false);
	const [isOperatorClicked, setIsOperatorClicked] = React.useState(false);
	/* clear the operator and operands*/
	const clearStateOperands = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};
	/* calculate and setResult */
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
	/* clear all for 'C' */
	const clearAllState = () => {
		setIsOperatorClicked(false);
		setIsGettingResult(false);
		clearStateOperands();
		setResult('');
	};

	/* to check if operand start with '0'.
	  if '0' is first element of operand this action will be rejected
	*/
	function getPrevValueWithoutFirstZeroNumber(number, prevOperand) {
		return (number.toString() === '0' && prevOperand.length === 0) ? prevOperand + '' : prevOperand + number.toString();
	}

	/* choose operand
	   if the result is. this onClick will be rejected.
	   if action is (clicked) choose operand 2 if no choose operand 1
	 */
	const setOperand = (number) => {
		if (!isGettingResult) {
			isOperatorClicked
				? setOperand2(prevOperand2 =>
					getPrevValueWithoutFirstZeroNumber(number, prevOperand2))
				: setOperand1(prevOperand1 =>
					getPrevValueWithoutFirstZeroNumber(number, prevOperand1));
		}
	};
	/*
	  set the operator
	  1. if result is.
	  2. if operand 1 is.
	 */
	const setOperators = (actionIndex) => {
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
	/*  a template for buttons with number 1 2 3 4 5 6 7 8 9 */
	const toNumberButtons = (number) => (
		<td key={number}>
			<button className={`${styles.btn} ${styles.number}`}
					onClick={() => setOperand(number)}>
				{number}
			</button>
		</td>
	);
	/*  a template for buttons with action +/-  */
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
	/*  a template for buttons with 0 */
	const zeroButton = (number, callback) => (
		<td colSpan="3">
			<button className={`${styles.zero} ${styles.number}`}
					onClick={callback}>
				{number}
			</button>
		</td>
	);
	/*  a template for buttons with = */
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
	/*  to display the result in the calculator */
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
						{operatorButton(action[0], () => clearAllState())}
					</tr>

					<tr>
						{NUMS.slice(4, 7).map(toNumberButtons)}
						{operatorButton(action[1], () => setOperators(1))}
					</tr>

					<tr>
						{NUMS.slice(1, 4).map(toNumberButtons)}
						{operatorButton(action[2], () => setOperators(2))}
					</tr>
					<tr>
						{zeroButton(0, () => setOperand(0))}
						{operatorResults(action[3], 3)}
					</tr>
					</tbody>
				</table>
			</div>
		</main>
	);
};
