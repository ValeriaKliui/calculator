import { getIfDecimalNumber } from "../../utils/string";

export class CalculatorState {
    constructor() {
        this.resetState()
    }
    resetState() {
        this.currentOperand = '0';
        this.isStartOfOperand = true;
        this.leftOperand = null;
        this.operationType = null;
    }

    setOperand(value) {
        const alreadyDecimal = getIfDecimalNumber(this.currentOperand);
        if (value === '.' && alreadyDecimal) return;

        if (this.isStartOfOperand) {
            this.currentOperand = value;
            this.isStartOfOperand = false;
        } else {
            this.currentOperand += value;
        }
    }
    getCurrentState() {
        return {
            currentOperand: this.currentOperand,
            leftOperand: this.leftOperand,
            operationType: this.operationType,
            isStartOfOperand: this.isStartOfOperand
        };
    }
}