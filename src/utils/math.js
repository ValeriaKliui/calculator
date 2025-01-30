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

	return first + second;
};

export const calculateMultiply = (a, b = 1) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		return 0;
	}

	const first = Number(a) || 0;
	const second = Number(b) || 0;

	return first * second;
};

export const calculateDivision = (a, b = 1) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		return 0;
	}

	if (b === 0) return NaN;

	const first = Number(a) || 0;
	const second = Number(b) || 0;

	return first / second;
};
export const calculatePower = (b, e = 2) => {
	if (
		[b, e].some(
			(val) => typeof val === 'boolean' || val === '' || val === null,
		)
	) {
		return 0;
	}

	if (!isFinite(e)) return NaN;

	const base = Number(b);
	const exponent = Number(e);

	if (isNaN(base) || isNaN(exponent) || base === 0) return 0;
	if (exponent === 0) return 1;
	if (exponent < 0) return 1 / calculatePower(base, -exponent);

	let result = 1;
	let currentBase = base;
	let currentExponent = exponent;

	while (currentExponent > 0) {
		if (currentExponent & 1) {
			result *= currentBase;
		}
		currentBase *= currentBase;
		currentExponent >>= 1;
	}

	return result;
};

const abs = (num) => (num < 0 ? -num : num);

export const calculateRoot = (b, e = 2) => {
	if (typeof b === 'boolean' || typeof e === 'boolean') {
		return 0;
	}

	const base = Number(b);
	const exponent = Number(e);

	if (base < 0 && exponent % 2 === 0) return NaN;
	if (base === 0) return 0;
	if (exponent === 1) return base;
	if (exponent === 0) return NaN;
	if (exponent < 0) return 1 / calculateRoot(base, -exponent);

	let guess = base > 1 ? base / 2 : base;
	const accuracy = 0.000000001;
	let prevGuess;

	do {
		prevGuess = guess;
		guess =
			((exponent - 1) * guess +
				base / calculatePower(guess, exponent - 1)) /
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
	const number = Number(value);

	if (
		typeof value === 'boolean' ||
		typeof value === 'object' ||
		value === '' ||
		value === null ||
		value === undefined ||
		isNaN(number)
	) {
		return 0;
	}

	if (number < 0 || number > 170 || !Number.isInteger(number)) {
		return NaN;
	}

	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i;
	}

	return result;
};
