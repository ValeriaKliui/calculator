import { getExpression } from '../../utils/string';

export class Display {
    constructor(displayElement, displayErrorElement) {
        this.displayElement = displayElement;
        this.displayErrorElement = displayErrorElement;
    }

    updateDisplay(calculatorState) {
        const { currentOperand, leftOperand, operationType, isStartOfOperand } =
            calculatorState.getCurrentState();

        const isRightOperandExists = leftOperand && !isStartOfOperand;
        const rightOperand = isRightOperandExists ? currentOperand : '';

        this.displayElement.value = getExpression(
            leftOperand ?? currentOperand,
            operationType,
            rightOperand,
        );
    }

    showError(error) {
        if (error) {
            this.displayErrorElement.value = error;
            this.displayErrorElement.hidden = false;
        } else this.displayErrorElement.hidden = true;
    }
}
