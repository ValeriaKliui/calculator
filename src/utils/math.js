import { ROUNDING_PRECISION } from '../constants';

export const roundNumber = (number, digit = ROUNDING_PRECISION) => {
	if (typeof number !== 'number' || isNaN(number)) {
		throw new Error('Invalid number input');
	}

	const roundedNumber = number.toFixed(digit);

	return parseFloat(roundedNumber);
};

export const calculateSum = (a, b = 0) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		throw new Error('Boolean values are not allowed');
	}

	const first = isNaN(Number(a)) ? 0 : Number(a);
	const second = isNaN(Number(b)) ? 0 : Number(b);

	return first + second;
};

export const calculateMultiply = (a, b = 1) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		throw new Error('Boolean values are not allowed');
	}

	const first = isNaN(Number(a)) ? 0 : Number(a);
	const second = isNaN(Number(b)) ? 0 : Number(b);

	return first * second;
};

export const calculateDivision = (a, b = 1) => {
	if (typeof a === 'boolean' || typeof b === 'boolean') {
		throw new Error('Boolean values are not allowed');
	}
	const first = isNaN(Number(a)) ? 0 : Number(a);
	const second = isNaN(Number(b)) ? 0 : Number(b);

	if (second === 0) {
		throw new Error('Division by zero is not allowed');
	}

	return first / second;
};
export const calculatePower = (b, e = 2) => {
	if (
		[b, e].some(
			(val) => typeof val === 'boolean' || val === '' || val === null,
		)
	) {
		throw new Error(
			'Invalid input: base or exponent cannot be boolean, null, or empty string',
		);
	}

	if (!isFinite(e)) {
		throw new Error('Exponent must be a finite number');
	}

	const base = Number(b);
	const exponent = Number(e);

	if (isNaN(base) || isNaN(exponent) || base === 0) {
		return 0;
	}

	if (exponent === 0) {
		return 1;
	}

	if (exponent < 0) {
		return 1 / calculatePower(base, -exponent);
	}

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
		throw new Error('Invalid input: base or exponent cannot be boolean');
	}

	const base = Number(b);
	const exponent = Number(e);

	if (isNaN(base) || isNaN(exponent)) {
		throw new Error('Base and exponent must be valid numbers');
	}

	if (base < 0 && exponent % 2 === 0) {
		throw new Error('Negative base cant has odd exponent');
	}

	if (base === 0) return 0;
	if (exponent === 1) return base;

	if (exponent < 0) {
		return 1 / calculateRoot(base, -exponent);
	}

	let guess = base > 1 ? base / 2 : base;
	const accuracy = 0.000000001;
	let prevGuess;

	const abs = (n) => (n < 0 ? -n : n);

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
		throw new Error('Invalid input: value or base cannot be boolean');
	}

	const number = Number(value);
	const baseNumber = Number(base);

	if (isNaN(number) || isNaN(baseNumber)) {
		throw new Error('Invalid input: value and base must be valid numbers');
	}

	if (!baseNumber) return number / 100;

	return number + (number * baseNumber) / 100;
};

export const calculateFactorial = (value) => {
	if (
		typeof value === 'boolean' ||
		typeof value === 'object' ||
		value === '' ||
		value === null ||
		value === undefined
	) {
		throw new Error(
			'Invalid input: value cannot be boolean, object, empty string, null, or undefined',
		);
	}

	const number = Number(value);

	if (isNaN(number)) {
		throw new Error('Invalid input: value must be a valid number');
	}

	if (!Number.isInteger(number) || number < 0 || number > 170) {
		throw new Error('Value is too big or not integer');
	}

	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i;
	}

	return result;
};
