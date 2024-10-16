import { NUM, OPERATOR } from '../constants';

export const handleResult = ({
								 operand1,
								 setOperand1,
								 operator,
								 setOperator,
								 operand2,
								 setOperand2,
								 setIsResult,
							 }) => {
	setOperator(OPERATOR.NONE);
	setOperand2(NUM.NONE);
	setIsResult(true);

	if (operand2 === NUM.NONE) {
		setOperand1(Number(operand1));

		return;
	}

	switch (operator) {
		case OPERATOR.PLUS: {
			setOperand1(Number(operand1) + Number(operand2));

			break;
		}
		case OPERATOR.MINUS: {
			setOperand1(Number(operand1) - Number(operand2));

			break;
		}
		default:
		// 	ничего не делать
	}
};
