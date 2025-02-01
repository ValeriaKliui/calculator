import { getExpression } from "../../utils/string";

export class CalculatorDisplay {
	constructor(displayElement, displayErrorElement) {
		this.displayElement = displayElement;
		this.displayErrorElement = displayErrorElement;
	}

	updateDisplay(calculatorState) {
		const { currentOperand, leftOperand, operationType, isStartOfOperand } = calculatorState.getCurrentState();

		const rightOperand = this.getRightOperand(leftOperand, currentOperand, isStartOfOperand);

		this.displayElement.value = getExpression(leftOperand ?? currentOperand, operationType, rightOperand);
	}

	getRightOperand(leftOperand, currentOperand, isStartOfOperand) {
		return leftOperand && !isStartOfOperand ? currentOperand : "";
	}

	showError(error) {
		if (error) {
			this.displayErrorElement.value = error;
			this.displayErrorElement.hidden = false;
		} else this.displayErrorElement.hidden = true;
	}
}
