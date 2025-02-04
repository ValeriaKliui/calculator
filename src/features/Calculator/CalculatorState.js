import { getIfDecimalNumber } from "@utils/string";

export class CalculatorState {
	#currentOperand = "0";
	#isStartOfOperand = true;
	#leftOperand = null;
	#operationType = null;

	constructor() {
		this.resetState();
	}
	resetState() {
		this.#currentOperand = "0";
		this.#isStartOfOperand = true;
		this.#leftOperand = null;
		this.#operationType = null;
	}

	setOperand(value) {
		const alreadyDecimal = getIfDecimalNumber(this.#currentOperand);
		if (value === "." && alreadyDecimal) return;

		if (this.#isStartOfOperand) {
			this.#currentOperand = value;
			this.#isStartOfOperand = false;
		} else {
			this.#currentOperand += value;
		}
	}

	updateState(state) {
		const {
			currentOperand = this.#currentOperand,
			leftOperand = this.#leftOperand,
			operationType = this.#operationType,
			isStartOfOperand = this.#isStartOfOperand,
		} = state;

		this.#currentOperand = currentOperand;
		this.#leftOperand = leftOperand;
		this.#operationType = operationType;
		this.#isStartOfOperand = isStartOfOperand;
	}

	getCurrentState() {
		return {
			currentOperand: this.#currentOperand,
			leftOperand: this.#leftOperand,
			operationType: this.#operationType,
			isStartOfOperand: this.#isStartOfOperand,
		};
	}
}
