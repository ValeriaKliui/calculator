export const getNumberFromString = (string) => {
	return string.match(/-?\d+/g)?.map((strNum) => Number(strNum)) || [];
};
