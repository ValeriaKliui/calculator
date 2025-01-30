import { Receiver } from './Calculator';
import { Invoker } from './CalculatorButtons';
import { Client } from './Client';
import { CLinesdsdf } from './CLientT';
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

export class CalculatorHandler {
	constructor(displayElement) {
		this.calculatorEngine = new Receiver();
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
		};
		this.buttons = new Invoker();
		this.displayElement = displayElement;
	}
	create() {
		const handler = new CLinesdsdf(
			this.commands,
			this.buttons,
			this.calculatorEngine,
			this.displayElement,
		);

		document
			.querySelector('.calculator__buttons')
			.addEventListener('click', (clickedButton) => {
				const buttonClicked = clickedButton.target.closest('button');
				if (buttonClicked) handler.handleButtonClick(buttonClicked);
			});
	}
}
