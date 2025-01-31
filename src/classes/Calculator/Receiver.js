import {
	calculateDivision,
	calculatePower,
	calculateFactorial,
	calculateMultiply,
	calculatePercent,
	calculateRoot,
	calculateSum,
	roundNumber,
} from '../../utils/math';

export class Receiver {
	constructor() {
		this.value = '';
		this.history = [];
		this.rememberedValue = '';
	}

	_calculate(operation, ...args) {
		this.history.push(this.value);
		const result = operation(...args);
		this.value = roundNumber(result);
		return this.value;
	}

	sum(left, right) {
		return this._calculate(calculateSum, left, right);
	}

	substract(left, right) {
		return this._calculate(calculateSum, left, right * -1);
	}

	multiply(left, right) {
		return this._calculate(calculateMultiply, left, right);
	}

	divide(left, right) {
		return this._calculate(calculateDivision, left, right);
	}

	percent(number, baseNumber) {
		return this._calculate(calculatePercent, number, baseNumber);
	}

	factorial(value) {
		return this._calculate(calculateFactorial, value);
	}

	power(base, exponent) {
		return this._calculate(calculatePower, base, exponent);
	}

	root(base, exponent) {
		return this._calculate(calculateRoot, base, exponent);
	}

	///////////////////

	memory_add(firstValue) {
		if (!this.value)
			this.rememberedValue = roundNumber(
				calculateSum(firstValue, this.rememberedValue),
			);
		else
			this.rememberedValue = roundNumber(
				calculateSum(this.value, this.rememberedValue),
			);
		return 0
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
		return 0
	}
	memory_clear() {
		this.rememberedValue = '';
		return 0
	}
	memory_recall() {
		return this.rememberedValue || 0;
	}

	toggle(number) {
		this.history.push(this.value);
		return (this.value = roundNumber(number * -1));
	}

	clear() {
		this.history = [];
		return 0
	}
	uncalculate() {
		this.value = this.history.pop() || 0
		return (this.value);
	}
}
