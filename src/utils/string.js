export const getNumbersFromString = (string) => {
	// Regular expression to match numbers excluding those after ^ symbol
	return (
		string
			.replace(/\^(\d+)/g, '') // Remove the part after ^ and the number itself
			.match(/-?\d*\.?\d+/g) // Now match all numbers in the cleaned string
			?.map((strNum) => Number(strNum)) || []
	);
};

export const trimOperator = (string = '') => string.slice(0, -1);
