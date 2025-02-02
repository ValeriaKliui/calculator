import {
	calculateDivision,
	calculateFactorial,
	calculateMultiply,
	calculatePercent,
	calculatePower,
	calculateRoot,
	calculateSum,
	roundNumber,
} from "@utils/math";

export class CalculatorEngine {
	constructor() {
		this.value = "";
		this.rememberedValue = "";
		this.history = [];
	}

	#calculate(operation, ...numbers) {
		this.history.push(this.value);

		const result = operation(...numbers);
		this.value = roundNumber(result);

		return this.value;
	}

	sum(left, right) {
		return this.#calculate(calculateSum, left, right);
	}

	subtract(left, right) {
		return this.#calculate(calculateSum, left, right * -1);
	}

	multiply(left, right) {
		return this.#calculate(calculateMultiply, left, right);
	}

	divide(left, right) {
		return this.#calculate(calculateDivision, left, right);
	}

	percent(number, baseNumber) {
		return this.#calculate(calculatePercent, number, baseNumber);
	}

	factorial(value) {
		return this.#calculate(calculateFactorial, value);
	}

	power(base, exponent) {
		return this.#calculate(calculatePower, base, exponent);
	}

	root(base, exponent) {
		return this.#calculate(calculateRoot, base, exponent);
	}
	toggle(number) {
		return this.#calculate(calculateMultiply, number, -1);
	}

	memory_add(value) {
		this.rememberedValue = this.#calculate(calculateSum, this.rememberedValue, value);
		return 0;
	}
	memory_subtract(value) {
		this.rememberedValue = this.#calculate(calculateSum, this.rememberedValue, value * -1);
		return 0;
	}
	memory_clear() {
		this.rememberedValue = "";
		return 0;
	}
	memory_recall() {
		return this.rememberedValue || 0;
	}
	uncalculate() {
		this.value = this.history.pop() || 0;
		return this.value;
	}
}
