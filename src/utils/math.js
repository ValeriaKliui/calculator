export const calculateSum = (a, b) => a + b;
export const calculateMultiply = (a, b) => a * b;
export const calculateDivision = (a, b) => a / b;
export const calculateExponent = (base, exponent) => {
	let result = 1;
	let absoluteExp = exponent < 0 ? -exponent : exponent;

	for (let i = 0; i < absoluteExp; i++) {
		result *= base;
	}

	return exponent < 0 ? 1 / result : result;
};
