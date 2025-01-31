export class CommandsSequentially {
    constructor(calculatorState, invoker, commands) {
        this.calculatorState = calculatorState
        this.invoker = invoker
        this.commands = commands

    }
    calculateSequentially(command) {
        const isReadyForCalculation =
            this.calculatorState.leftOperand !== null &&
            !this.calculatorState.isStartOfOperand;

        if (isReadyForCalculation) {
            this.calculateExpression();
        } else {
            this.calculatorState.leftOperand =
                this.calculatorState.currentOperand;
        }

        this.calculatorState.operationType = command;
        this.calculatorState.isStartOfOperand = true;
    }

    calculateExpression() {
        const { leftOperand, currentOperand, operationType } =
            this.calculatorState;

        const command = this.commands[operationType];

        this.invoker.setCommand(command);
        const result = this.invoker.pressButton(leftOperand, currentOperand);

        this.calculatorState.currentOperand = result;
        this.calculatorState.leftOperand = result;
        this.calculatorState.operationType = null;
        this.calculatorState.isStartOfOperand = true;
    }





}