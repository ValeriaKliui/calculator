import { CommandInvoker } from "./CommandInvoker";
import { CalculatorEngine } from "./CalculatorEngine";
import { CalculatorState } from "./CalculatorState";
import {
	DivisionCommand,
	FactorialCommand,
	MemoryAddCommand,
	MemoryClearCommand,
	MemoryRecallCommand,
	MemorySubstractCommand,
	MultiplyCommand,
	PercentCommand,
	PowerCommand,
	RootCommand,
	SubstractCommand,
	SumCommand,
	ToggleSignCommand,
} from "./Commands";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { CommandProcessor } from "./CommandProcessor";

export class CalculatorController {
	constructor(displayElement, displayErrorElement) {
		this.calculatorEngine = new CalculatorEngine();
		this.commandInvoker = new CommandInvoker();

		this.calculatorState = new CalculatorState();
		this.display = new CalculatorDisplay(displayElement, displayErrorElement);
		this.commands = this.initializeCommands();
		this.commandProcessor = new CommandProcessor(this.calculatorState, this.commandInvoker, this.commands);
	}

	initializeCommands() {
		return {
			sum: new SumCommand(this.calculatorEngine),
			substract: new SubstractCommand(this.calculatorEngine),
			multiply: new MultiplyCommand(this.calculatorEngine),
			divide: new DivisionCommand(this.calculatorEngine),
			toggle: new ToggleSignCommand(this.calculatorEngine),
			power: new PowerCommand(this.calculatorEngine),
			root: new RootCommand(this.calculatorEngine),
			percent: new PercentCommand(this.calculatorEngine),
			memory_add: new MemoryAddCommand(this.calculatorEngine),
			memory_substract: new MemorySubstractCommand(this.calculatorEngine),
			memory_clear: new MemoryClearCommand(this.calculatorEngine),
			memory_recall: new MemoryRecallCommand(this.calculatorEngine),
			factorial: new FactorialCommand(this.calculatorEngine),
		};
	}

	///передавать элемент!!!
	create() {
		document.querySelector(".calculator__buttons").addEventListener("click", (clickedButton) => {
			const buttonClicked = clickedButton.target.closest("button");
			if (buttonClicked) this.handleButtonClick(buttonClicked);
		});
	}
	handleButtonClick(buttonClicked) {
		const { value, command, power, base } = buttonClicked.dataset;
		const isOperand = !!value;

		this.commandInvoker.resetError();

		if (isOperand) this.calculatorState.setOperand(value);
		else this.commandProcessor.processOperator(command, base, power);

		this.display.updateDisplay(this.calculatorState);

		const error = this.commandInvoker.getError();
		this.display.showError(error);
	}
}
