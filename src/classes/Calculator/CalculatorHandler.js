import { Invoker } from './CalculatorButtons';
import { Receiver } from './Receiver';
import { CalculatorState } from './CalculatorState';
import {
	ClearCommand,
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
} from './Commands';
import { Display } from './Display';
import { CommandsHanlder } from './CommandsHanlder';

export class CalculatorHandler {
	constructor(displayElement, displayErrorElement) {
		this.calculatorEngine = new Receiver();
		this.invoker = new Invoker();

		// this.calculationError = null;
		this.calculatorState = new CalculatorState();
		this.display = new Display(displayElement, displayErrorElement);
		this.CommandsHanlder = new CommandsHanlder(this.calculatorState, this.invoker, this.commands);
		this.commands = {
			sum: new SumCommand(this.calculatorEngine),
			substract: new SubstractCommand(this.calculatorEngine),
			multiply: new MultiplyCommand(this.calculatorEngine),
			clear: new ClearCommand(this.calculatorEngine),
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
		}
	}

	create() {
		document
			.querySelector('.calculator__buttons')
			.addEventListener('click', (clickedButton) => {
				const buttonClicked = clickedButton.target.closest('button');
				if (buttonClicked) this.handleButtonClick(buttonClicked);
			});
	}
	handleButtonClick(buttonClicked) {
		const { value, command, power, base } = buttonClicked.dataset;
		const isOperand = !!value;

		this.invoker.resetError();

		if (isOperand) this.calculatorState.setOperand(value);
		else this.CommandsHanlder.processOperator(command, base, power);

		this.display.updateDisplay(this.calculatorState);

		const error = this.invoker.getError();
		this.display.showError(error);
	}
}
