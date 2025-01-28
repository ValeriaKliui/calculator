import { Receiver } from './Calculator';
import { Invoker } from './CalculatorButtons';
import { Client } from './Client';
import {
	ClearCommand,
	DivisionCommand,
	MultiplyCommand,
	SquareCommand,
	SumCommand,
	ToggleSignCommand,
} from './Commands';

export class CalculatorHandler {
	constructor(displayElement) {
		this.calculatorEngine = new Receiver();
		this.commands = {
			sum: new SumCommand(this.calculatorEngine),
			multiply: new MultiplyCommand(this.calculatorEngine),
			clear: new ClearCommand(this.calculatorEngine),
			divide: new DivisionCommand(this.calculatorEngine),
			toggleSign: new ToggleSignCommand(this.calculatorEngine),
			square: new SquareCommand(this.calculatorEngine),
		};
		this.buttons = new Invoker();
		this.displayElement = displayElement;
	}
	create() {
		const handler = new Client(
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
