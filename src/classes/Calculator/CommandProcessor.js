import { ImmediateCommandProcessor } from "./ImmediateCommandProcessor";
import { SequentialCommandProcessor } from "./SequentialCommandProcessor";

export class CommandProcessor {
	constructor(calculatorState, commandInvoker, commands) {
		this.calculatorState = calculatorState;
		this.commands = commands;
		this.sequentialCommandProcessor = new SequentialCommandProcessor(
			this.calculatorState,
			commandInvoker,
			this.commands,
		);
		this.immediateCommandProcessor = new ImmediateCommandProcessor(
			this.calculatorState,
			commandInvoker,
			this.sequentialCommandProcessor.calculateExpression,
			this.commands,
		);
	}

	processOperator(command, base, power) {
		if (this.isBasicOperation(command, base, power)) {
			this.sequentialCommandProcessor.calculateSequentially(command);
		} else {
			this.immediateCommandProcessor.calculateImmediately(command, base, power);
		}
	}

	isBasicOperation(command, base, power) {
		const basicOperations = ["sum", "multiply", "substract", "power", "root", "divide"];
		return basicOperations.includes(command) && !base && !power;
	}
}
