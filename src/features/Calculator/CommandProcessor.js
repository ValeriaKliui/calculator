import { ImmediateCommandProcessor } from "./ImmediateCommandProcessor";
import { SequentialCommandProcessor } from "./SequentialCommandProcessor";

export class CommandProcessor {
	constructor({ calculatorState, commandInvoker, commands }) {
		this.calculatorState = calculatorState;
		this.commands = commands;

		this.sequentialCommandProcessor = new SequentialCommandProcessor({
			calculatorState: this.calculatorState,
			commands: this.commands,
			commandInvoker,
		});

		this.immediateCommandProcessor = new ImmediateCommandProcessor({
			calculatorState: this.calculatorState,
			commands: this.commands,
			commandInvoker,
			calculateExpression: this.sequentialCommandProcessor.calculateExpression,
		});
	}
	processCommand(value, command, base, power, isSequential) {
		if (value) {
			this.calculatorState.setOperand(value);
		} else {
			this.processOperator(command, base, power, isSequential);
		}
	}

	processOperator(command, base, power, isSequential) {
		if (isSequential) {
			this.sequentialCommandProcessor.calculateSequentially(command);
		} else {
			this.immediateCommandProcessor.calculateImmediately(command, base, power);
		}
	}
}
