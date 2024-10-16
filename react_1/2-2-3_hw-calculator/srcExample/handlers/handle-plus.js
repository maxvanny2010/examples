import { OPERATOR } from '../constants';

export const handlePlus = ({ setOperator, setIsResult }) => {
	setOperator(OPERATOR.PLUS);
	setIsResult(false);
};
