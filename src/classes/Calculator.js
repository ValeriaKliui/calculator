import {
	calculateDivision,
	calculatePower,
	calculateFactorial,
	calculateMultiply,
	calculatePercent,
	calculateRoot,
	calculateSum,
	roundNumber,
} from '../utils/math';

export class Receiver {
	constructor() {
		this.value = '';
		this.history = [];
		this.rememberedValue = '';
	}
	divide(left, right) {
		this.history.push(this.value);

		const result = calculateDivision(left, right);
		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error('Invalid division result (NaN or Infinity).');
		}

		return (this.value = roundNumber(result));
	}
	memory_add(firstValue) {
		if (!this.value)
			this.rememberedValue = roundNumber(
				calculateSum(firstValue, this.rememberedValue),
			);
		else
			this.rememberedValue = roundNumber(
				calculateSum(this.value, this.rememberedValue),
			);
	}
	memory_substract(firstValue) {
		if (!this.value)
			this.rememberedValue = roundNumber(
				calculateSum(firstValue * -1, this.rememberedValue),
			);
		else
			this.rememberedValue = roundNumber(
				calculateSum(this.value * -1, this.rememberedValue),
			);
	}
	memory_clear() {
		this.rememberedValue = '';
	}
	memory_recall() {
		return this.rememberedValue;
	}

	sum(left, right) {
		this.history.push(this.value);
		const result = calculateSum(left, right);

		return (this.value = roundNumber(result));
	}
	substract(left, right) {
		this.history.push(this.value);
		return (this.value = roundNumber(calculateSum(left, right * -1)));
	}
	power(base, exponent) {
		this.history.push(this.value);
		const result = calculatePower(base, exponent);

		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error('Invalid power result (NaN or Infinity).');
		}

		return (this.value = roundNumber(result));
	}
	multiply(left, right) {
		this.history.push(this.value);
		return (this.value = roundNumber(calculateMultiply(left, right)));
	}
	square(base, exponent) {
		this.history.push(this.value);
		return (this.value = roundNumber(calculatePower(base, exponent)));
	}
	root(base, exponent) {
		this.history.push(this.value);

		const result = calculateRoot(base, exponent);

		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error(
				'An even root of a negative number does not exist in real numbers.',
			);
		}
		return (this.value = roundNumber(result));
	}
	root_y(base, exponent) {
		this.history.push(this.value);

		const result = calculateRoot(base, exponent);
		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error(
				'An even root of a negative number does not exist in real numbers.',
			);
		}
		return (this.value = roundNumber(result));
	}
	toggle(number) {
		this.history.push(this.value);
		return (this.value = roundNumber(number * -1));
	}
	percent(number, baseNumber) {
		this.history.push(this.value);
		return (this.result = roundNumber(
			calculatePercent(number, baseNumber),
		));
	}

	factorial(value) {
		this.history.push(this.value);

		const result = calculateFactorial(value);

		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error('Number for calculating factorial is too big.');
		}
		return (this.value = roundNumber(result));
	}
	clear() {
		this.history = [];
	}
	uncalculate() {
		return (this.value = this.history.pop());
	}
}
