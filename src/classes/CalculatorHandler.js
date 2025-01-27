import { OPERATORS_TYPES } from '../constants';
import { getNumberFromString, getNumbersFromString } from '../utils/string';
import { Calculator } from './Calculator';
import { CalculatorButtons } from './CalculatorButtons';
import {
	ClearCommand,
	DivisionCommand,
	MultiplyCommand,
	SquareCommand,
	SumCommand,
	ToggleSignCommand,
} from './Commands';

export class CalculatorHandler {
	constructor(input) {
		this.calculator = new Calculator();
		this.buttons = new CalculatorButtons();
		this.input = input;
		this.commands = {
			sum: new SumCommand(this.calculator),
			multiply: new MultiplyCommand(this.calculator),
			clear: new ClearCommand(this.calculator),
			divide: new DivisionCommand(this.calculator),
			toggleSign: new ToggleSignCommand(this.calculator),
			square: new SquareCommand(this.calculator),
		};
	}

	handleClick(button) {
		if (button.value) {
			this._appendToDisplay(button.value);
		}

		const operatorBetweenNumbers =
			this.input.value.match(/[+\-×÷^/%]/)?.[0];
		const clickedButtonType = button.dataset.type;

		if (clickedButtonType)
			this._handleOperation(
				operatorBetweenNumbers,
				button.value,
				clickedButtonType,
			);
	}

	_handleOperation(operatorBetweenNumbers, buttonValue, clickedButtonType) {
		const operations = {
			sum: () => this._handleSum(buttonValue),
			undo: () => this._handleUndo(),
			multiply: () => this._handleMultiply(buttonValue),
			divide: () => this._handleDivision(),
			clear: () => this._handleClear(),
			toggle: () => this._handleToggleSign(),
			square: () => this._handleSquare(buttonValue),
		};

		const expressionCommand = OPERATORS_TYPES[operatorBetweenNumbers];
		const expressionHandler = operations[expressionCommand];

		if (expressionHandler) expressionHandler();

		const shouldExecuteButtonHandler =
			expressionCommand !== clickedButtonType;

		if (shouldExecuteButtonHandler) {
			operations?.[clickedButtonType]?.();
		}
	}

	_handleClear() {
		this.buttons.setCommand(this.commands.clear);
		this.buttons.pressButton();
		this._updateDisplay(0);
	}
	_handleToggleSign() {
		const numbers = getNumbersFromString(this.input.value);

		this.buttons.setCommand(this.commands.toggleSign);
		this.buttons.pressButton(numbers);
		this._updateDisplay(`${this.calculator.getValue()}`);
	}
	_handleDivision(operator) {
		const numbers = getNumbersFromString(this.input.value);

		if (numbers.length === 2) {
			this.buttons.setCommand(this.commands.divide);
			this.buttons.pressButton(numbers);
			this._updateDisplay(
				`${this.calculator.getValue()}${operator || ''}`,
			);
		}
	}
	_handleSquare(button) {
		const regex = /(?<=\^)\d+/g;

		const exponent =
			this.input.value.match(regex)?.[0] || Number(button.slice(1));

		if (exponent) {
			const numbers = getNumbersFromString(this.input.value);
			if (isNaN(Number(exponent))) return;

			this.buttons.setCommand(this.commands.square);
			this.buttons.pressButton(numbers, exponent);
			this._updateDisplay(`${this.calculator.getValue()}`);
		}
	}
	_handleSum(operator) {
		const numbers = getNumbersFromString(this.input.value);

		this.buttons.setCommand(this.commands.sum);
		this.buttons.pressButton(numbers);
		this._updateDisplay(`${this.calculator.getValue()}${operator || ''}`);
	}
	_handleMultiply(operator) {
		const numbers = getNumbersFromString(this.input.value);

		this.buttons.setCommand(this.commands.multiply);
		this.buttons.pressButton(numbers);
		this._updateDisplay(`${this.calculator.getValue()}${operator || ''}`);
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
