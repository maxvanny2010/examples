import { OPERATOR } from '../constants';

export const handleMinus = ({ setOperator, setIsResult }) => {
	setOperator(OPERATOR.MINUS);
	setIsResult(false);
};
