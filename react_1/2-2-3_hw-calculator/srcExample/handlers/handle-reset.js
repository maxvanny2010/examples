import { NUM, OPERATOR } from '../constants';

export const handleReset = ({ setOperand1, setOperator, setOperand2, setIsResult }) => {
	setOperand1(NUM.ZERO);
	setOperator(OPERATOR.NONE);
	setOperand2(NUM.NONE);
	setIsResult(false);
};
