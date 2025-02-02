import { getExpression } from "@utils/string";

export class CalculatorDisplay {
	constructor({ displayElement, displayErrorElement }) {
		this.displayElement = displayElement;
		this.displayErrorElement = displayErrorElement;
	}

	updateDisplay({ currentOperand, leftOperand, operationType, isStartOfOperand }) {
		const rightOperand = leftOperand !== null && !isStartOfOperand ? currentOperand : "";

		this.displayElement.value = getExpression(leftOperand ?? currentOperand, operationType, rightOperand);
	}

	showError(error) {
		if (error) {
			this.displayErrorElement.value = error;
			this.displayErrorElement.hidden = false;
		} else this.displayErrorElement.hidden = true;
	}
}
