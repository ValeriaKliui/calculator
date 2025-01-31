export class SequentialCommandProcessor {
	constructor(calculatorState, commandInvoker, commands) {
		this.calculatorState = calculatorState;
		this.commandInvoker = commandInvoker;
		this.commands = commands;
	}
	calculateSequentially(command) {
		const isReadyForCalculation =
			this.calculatorState.leftOperand !== null && !this.calculatorState.isStartOfOperand;

		if (isReadyForCalculation) {
			this.calculateExpression();
		} else {
			this.calculatorState.leftOperand = this.calculatorState.currentOperand;
		}

		this.calculatorState.operationType = command;
		this.calculatorState.isStartOfOperand = true;
	}

	calculateExpression() {
		const { leftOperand, currentOperand, operationType } = this.calculatorState;

		const command = this.commands[operationType];

		this.commandInvoker.setCommand(command);
		const result = this.commandInvoker.pressButton(leftOperand, currentOperand);

		this.calculatorState.currentOperand = result;
		this.calculatorState.leftOperand = result;
		this.calculatorState.operationType = null;
		this.calculatorState.isStartOfOperand = true;
	}
}
