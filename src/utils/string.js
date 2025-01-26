export const getNumberFromString = (string) => {
	return string.match(/-?\d+/g)?.map((strNum) => Number(strNum)) || [];
};
export const trimOperator = (string = '') => string.slice(0, -1);
