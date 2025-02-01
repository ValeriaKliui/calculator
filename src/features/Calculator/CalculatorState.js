import { getIfDecimalNumber } from "../../utils/string";

export class CalculatorState {
	constructor() {
		this.resetState();
	}
	resetState() {
		this.currentOperand = "0";
		this.isStartOfOperand = true;
		this.leftOperand = null;
		this.operationType = null;
	}

	setOperand(value) {
		const alreadyDecimal = getIfDecimalNumber(this.currentOperand);
		if (value === "." && alreadyDecimal) return;

		if (this.isStartOfOperand) {
			this.currentOperand = value;
			this.isStartOfOperand = false;
		} else {
			this.currentOperand += value;
		}
	}

	updateState({ currentOperand, leftOperand, operationType, isStartOfOperand }) {
		if (currentOperand !== undefined) this.currentOperand = currentOperand;
		if (leftOperand !== undefined) this.leftOperand = leftOperand;
		if (operationType !== undefined) this.operationType = operationType;
		if (isStartOfOperand !== undefined) this.isStartOfOperand = isStartOfOperand;
	}

	getCurrentState() {
		return {
			currentOperand: this.currentOperand,
			leftOperand: this.leftOperand,
			operationType: this.operationType,
			isStartOfOperand: this.isStartOfOperand,
		};
	}
}
