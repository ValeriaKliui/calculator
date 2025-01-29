import { ROUNDING_PRECISION } from '../constants';

export const roundNumber = (number, digit = ROUNDING_PRECISION) => {
	const roundedNumber = number.toFixed(digit);

	return parseFloat(roundedNumber);
};

export const calculateSum = (a, b = 0) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		return 0;
	}

	const first = Number(a) || 0;
	const second = Number(b) || 0;

	return roundNumber(first + second);
};

export const calculateMultiply = (a, b = 1) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		return 0;
	}

	const first = Number(a) || 0;
	const second = Number(b) || 0;

	return roundNumber(first * second);
};

export const calculateDivision = (a, b = 1) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		return 0;
	}

	if (b === 0) return NaN;

	const first = Number(a) || 0;
	const second = Number(b) || 0;

	return roundNumber(first / second);
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
		guess =
			((exponent - 1) * guess +
				base / calculateExponent(guess, exponent - 1)) /
			exponent;
	} while (abs(guess - prevGuess) > accuracy);

	return guess;
};
export const calculatePercent = (value = 0, base = 0) => {
	if (typeof value === 'boolean' || typeof base === 'boolean') {
		return 0;
	}

	const number = Number(value);
	const baseNumber = Number(base);

	if (!baseNumber) return number / 100;

	return number + (number * baseNumber) / 100;
};

export const calculateFactorial = (value) => {
	if (
		typeof value === 'boolean' ||
		typeof value === 'object' ||
		value === '' ||
		value === null ||
		value === undefined ||
		isNaN(Number(value))
	) {
		return 0;
	}

	const number = Number(value);

	if (number < 0 || number > 170 || !Number.isInteger(number)) {
		return NaN;
	}

	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i;
	}

	return roundNumber(result);
};
