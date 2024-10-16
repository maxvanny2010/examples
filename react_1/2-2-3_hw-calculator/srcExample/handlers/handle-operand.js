import { NUM } from '../constants';

export const handleOperand = (operandValue, operandSetter, num) => {
	if (operandValue === NUM.ZERO) {
		if (num === NUM.ZERO) {
			return;
		}

		operandSetter(num);
	} else {
		operandSetter(operandValue + num);
	}
};
