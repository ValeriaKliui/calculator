import { getNumberFromString, trimOperator } from '../utils/string';
import { Calculator } from './Calculator';
import { CalculatorButtons } from './CalculatorButtons';
import { ClearCommand, MultiplyCommand, SumCommand } from './Commands';

export class ButtonHandler {
	constructor(input) {
		this.calculator = new Calculator();
		this.sumCommand = new SumCommand(this.calculator);
		this.multiplyCommand = new MultiplyCommand(this.calculator);
		this.clearCommand = new ClearCommand(this.calculator);
		this.buttons = new CalculatorButtons();
		this.input = input;
	}

	handleClick(button) {
		if (button.value) {
			this._appendToDisplay(button.value);
		}

		switch (button.dataset.type) {
			case 'sum':
				this._handleSum(button.value);
				break;

			case 'undo':
				this._handleUndo();
				break;
			case 'multiply':
				this._handleMultiply(button.value);

			case 'equal':
				this._handleEqual();
				break;

			case 'clear':
				this._handleClear();
				break;
		}
	}
	_handleClear() {
		this.buttons.setCommand(this.clearCommand);
		this.buttons.pressButton();
		this._updateDisplay(0);
	}
	_handleEqual() {
		if (this.input.value.includes('+')) this._handleSum('+');
	}
	_handleSum(operator) {
		const numbers = getNumberFromString(this.input.value);

		if (numbers.length === 2) {
			this.buttons.setCommand(this.sumCommand);
			this.buttons.pressButton(numbers);
			this._updateDisplay(`${this.calculator.getValue()}${operator}`);
		}
	}
	_handleMultiply(operator) {
		const numbers = getNumberFromString(this.input.value);

		if (numbers.length === 2) {
			this.buttons.setCommand(this.multiplyCommand);
			this.buttons.pressButton(numbers);
			this._updateDisplay(`${this.calculator.getValue()}${operator}`);
		}
	}
	_handleUndo() {
		this.buttons.undoButton();
		this._updateDisplay(this.calculator.getValue());
	}

	_appendToDisplay(value) {
		this._updateDisplay(this.input.value + value);
	}

	_updateDisplay(value) {
		this.input.value = value;
	}
}
