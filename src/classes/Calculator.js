import {
	calculateDivision,
	calculateExponent,
	calculateFactorial,
	calculateMultiply,
	calculatePercent,
	calculateRoot,
	calculateSum,
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

		return (this.value = result);
	}
	memory_add(firstValue) {
		if (!this.value)
			this.rememberedValue = calculateSum(
				firstValue,
				this.rememberedValue,
			);
		else
			this.rememberedValue = calculateSum(
				this.value,
				this.rememberedValue,
			);
	}
	memory_substract(firstValue) {
		if (!this.value)
			this.rememberedValue = calculateSum(
				firstValue * -1,
				this.rememberedValue,
			);
		else
			this.rememberedValue = calculateSum(
				this.value * -1,
				this.rememberedValue,
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

		return (this.value = result);
	}
	substract(left, right) {
		this.history.push(this.value);
		return (this.value = calculateSum(left, right * -1));
	}
	power(base, exponent) {
		this.history.push(this.value);
		return (this.value = calculateExponent(base, exponent));
	}
	multiply(left, right) {
		this.history.push(this.value);
		return (this.value = calculateMultiply(left, right));
	}
	square(base, exponent) {
		this.history.push(this.value);
		return (this.value = calculateExponent(base, exponent));
	}
	root(base, exponent) {
		this.history.push(this.value);

		const result = calculateRoot(base, exponent);

		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error(
				'An even root of a negative number does not exist in real numbers.',
			);
		}
		return (this.value = result);
	}
	root_y(base, exponent) {
		this.history.push(this.value);

		const result = calculateRoot(base, exponent);
		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error(
				'An even root of a negative number does not exist in real numbers.',
			);
		}
		return (this.value = result);
	}
	toggle(number) {
		this.history.push(this.value);
		return (this.value = number * -1);
	}
	percent(number, numberDepending) {
		this.history.push(this.value);
		return (this.result = calculatePercent(number, numberDepending));
	}

	factorial(value) {
		this.history.push(this.value);

		const result = calculateFactorial(value);

		if (!Number.isFinite(result) || Number.isNaN(result)) {
			throw new Error('Number for calculating factorial is too big.');
		}
		return (this.value = result);
	}
	clear() {
		this.history = [];
	}
	uncalculate() {
		return (this.value = this.history.pop());
	}
}
