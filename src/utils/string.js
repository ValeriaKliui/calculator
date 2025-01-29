import { OPERATORS_SYMBOLS } from '../constants';

export const trimOperator = (string = '') => string.slice(0, -1);

export const getOperatorSymbol = (operationType) => {
	return OPERATORS_SYMBOLS[operationType] || null;
};
export const getExpression = (
	currentOperand,
	leftOperand,
	operationType,
	rightOperand,
) => {
	const operator = getOperatorSymbol(operationType);

	if (leftOperand === null 
		//не уверена насчет rightOperand === null
		|| rightOperand === null) {
		return currentOperand;
	}

	return operator
		? `${leftOperand}${operator}${rightOperand}`
		: `${leftOperand}`;
};
