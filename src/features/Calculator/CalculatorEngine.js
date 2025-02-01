import {
	calculateDivision,
	calculateFactorial,
	calculateMultiply,
	calculatePercent,
	calculatePower,
	calculateRoot,
	calculateSum,
	roundNumber,
} from "../../utils/math";

export class CalculatorEngine {
	constructor() {
		this.value = "";
		this.rememberedValue = "";
		this.history = [];
	}

	_calculate(operation, ...args) {
		this.history.push(this.value);
		const result = operation(...args);
		this.value = roundNumber(result);
		return this.value;
	}
	_updateMemory(value, operation) {
		if (!this.value) {
			this.rememberedValue = roundNumber(operation(value, this.rememberedValue));
		} else {
			this.rememberedValue = roundNumber(operation(this.value, this.rememberedValue));
		}
		return 0;
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

	memory_add(value) {
		this.rememberedValue = this._calculate(calculateSum, this.rememberedValue, value);
		return 0;
	}
	memory_substract(value) {
		this.rememberedValue = this._calculate(calculateSum, this.rememberedValue, value * -1);
		return 0;
	}
	memory_clear() {
		this.rememberedValue = "";
		return 0;
	}
	memory_recall() {
		return this.rememberedValue || 0;
	}

	toggle(number) {
		this.history.push(this.value);
		this.value = roundNumber(number * -1);
		return this.value;
	}

	uncalculate() {
		this.value = this.history.pop() || 0;
		return this.value;
	}
}
