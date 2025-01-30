import { getExpression, getIfDecimalNumber } from "../utils/string";

export class Display {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.reset();
    }
    reset() {
        this.currentOperand = '0';
        this.isNewOperand = true;
        this.leftOperand = null;
        this.operationType = null;
    }

    setOperand(value) {
        const alreadyDecimal = getIfDecimalNumber(this.currentOperand);
        if (value === '.' && alreadyDecimal) return;

        if (this.isNewOperand) {
            this.currentOperand = value;
            this.isNewOperand = false;
        } else {
            this.currentOperand += value;
        }

        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.value = getExpression(
            this.currentOperand,
            this.leftOperand,
            this.operationType,
            !this.isNewOperand ? this.currentOperand : '',
        );
    }
}