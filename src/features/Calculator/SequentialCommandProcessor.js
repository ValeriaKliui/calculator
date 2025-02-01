export class SequentialCommandProcessor {
	constructor({ calculatorState, commandInvoker, commands }) {
		this.calculatorState = calculatorState;
		this.commandInvoker = commandInvoker;
		this.commands = commands;
	}

	calculateSequentially(command) {
		const { currentOperand, leftOperand, isStartOfOperand } = this.calculatorState.getCurrentState();

		const isReadyForCalculation = leftOperand !== null && !isStartOfOperand;

		if (isReadyForCalculation) {
			this.calculateExpression();
		} else {
			this.calculatorState.updateState({ leftOperand: currentOperand });
		}

		this.calculatorState.updateState({ operationType: command, isStartOfOperand: true });
	}

	calculateExpression() {
		const { leftOperand, currentOperand, operationType } = this.calculatorState;

		const command = this.commands[operationType];

		this.commandInvoker.setCommand(command);
		const result = this.commandInvoker.pressButton(leftOperand, currentOperand);

		this.calculatorState.updateState({
			currentOperand: result,
			leftOperand: result,
			operationType: null,
			isStartOfOperand: true,
		});
	}
}
