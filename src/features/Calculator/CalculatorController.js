import { CommandProcessor } from "./CommandProcessor";
import {
	DivisionCommand,
	FactorialCommand,
	MemoryAddCommand,
	MemoryClearCommand,
	MemoryRecallCommand,
	MemorySubtractCommand,
	MultiplyCommand,
	PercentCommand,
	PowerCommand,
	RootCommand,
	SubtractCommand,
	SumCommand,
	ToggleSignCommand,
} from "./Commands";

export class CalculatorController {
	constructor({ display, calculatorEngine, commandInvoker, calculatorState }) {
		this.display = display;
		this.calculatorEngine = calculatorEngine;
		this.commandInvoker = commandInvoker;
		this.calculatorState = calculatorState;
		this.commands = {
			sum: new SumCommand(this.calculatorEngine),
			subtract: new SubtractCommand(this.calculatorEngine),
			multiply: new MultiplyCommand(this.calculatorEngine),
			divide: new DivisionCommand(this.calculatorEngine),
			toggle: new ToggleSignCommand(this.calculatorEngine),
			power: new PowerCommand(this.calculatorEngine),
			root: new RootCommand(this.calculatorEngine),
			percent: new PercentCommand(this.calculatorEngine),
			memory_add: new MemoryAddCommand(this.calculatorEngine),
			memory_subtract: new MemorySubtractCommand(this.calculatorEngine),
			memory_clear: new MemoryClearCommand(this.calculatorEngine),
			memory_recall: new MemoryRecallCommand(this.calculatorEngine),
			factorial: new FactorialCommand(this.calculatorEngine),
		};
		this.commandProcessor = new CommandProcessor({
			calculatorState: this.calculatorState,
			commandInvoker: this.commandInvoker,
			commands: this.commands,
		});
	}

	handleClick({ value, command, power, base, isSequential }) {
		this.commandInvoker.resetError();

		this.commandProcessor.processCommand(value, command, base, power, isSequential);

		this.display.updateDisplay(this.calculatorState.getCurrentState());

		const error = this.commandInvoker.getError();
		this.display.showError(error);
	}
}
