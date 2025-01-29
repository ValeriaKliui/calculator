export const calculateSum = (a, b) => a + b;
export const calculateMultiply = (a, b) => a * b;
export const calculateDivision = (a, b) => {
	if (b===0) return NaN;
	return a / b
};
export const calculateExponent = (base, exponent) => {
	let result = 1;
	let absoluteExp = exponent < 0 ? -exponent : exponent;

	for (let i = 0; i < absoluteExp; i++) {
		result *= base;
	}

	return exponent < 0 ? 1 / result : result;
};

const abs = (num) => (num < 0 ? -num : num);

export const calculateRoot = (base, exponent) => {
    if (base < 0 && exponent % 2 === 0) return NaN; 
    if (base === 0) return 0; 
    if (exponent === 1) return base; 

    let guess = base / exponent; 
    const accuracy = 0.000001; 
    let prevGuess;

    do {
        prevGuess = guess;
        guess = ((exponent - 1) * guess + base / calculateExponent(guess, exponent - 1)) / exponent;
    } while (abs(guess - prevGuess) > accuracy);

    return guess;
};
