import { OPERATORS_SYMBOLS } from '../constants';

export const trimOperator = (string = '') => string.slice(0, -1);

export const getOperatorSymbol = (operationType) => {
	return OPERATORS_SYMBOLS[operationType] || null;
};
export const getExpression = (
	leftOperand,
	operationType,
	rightOperand,
) => {
	const operator = getOperatorSymbol(operationType);

	if (operationType === 'root')`${rightOperand ?? ''}${operator ?? ''}${leftOperand ?? ''}`

	return `${leftOperand ?? ''}${operator ?? ''}${rightOperand ?? ''}`
};
export const getIfDecimalNumber = (operand) => String(operand).includes('.');
