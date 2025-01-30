import {
	getExpression,
	getIfDecimal,
	getIfDecimalNumber,
} from '../utils/string';

export class Client {
	constructor(commands, invoker, receiver, displayElement) {
		this.commands = commands;
		this.invoker = invoker;
		this.receiver = receiver;
		this.displayElement = displayElement;

		this.resetDisplay();
	}

	resetDisplay() {
		this.currentOperand = '0';
		this.isNewOperand = true;
		this.leftOperand = null;
		this.operationType = null;
	}

	updateDisplay() {
		this.displayElement.value = getExpression(
			this.currentOperand,
			this.leftOperand,
			this.operationType,
			!this.isNewOperand ? this.currentOperand : '',
		);
	}

	handleButtonClick(buttonClicked) {
		const { value, command, power, base } = buttonClicked.dataset;

		const isOperand = !!value;

		if (isOperand) this.appendOperand(value);
		else this.processOperator(command, base, power);

		this.updateDisplay();
	}
	appendOperand(value) {
		const alreadyDecimal = getIfDecimalNumber(this.currentOperand);
		if (value === '.' && alreadyDecimal) return;

		if (this.isNewOperand) {
			this.currentOperand = value;
			this.isNewOperand = false;
		} else {
			this.currentOperand += value;
		}

		this.updateDisplay();
	}

	processOperator(command, base, power) {
		const basicOperations = [
			'sum',
			'multiply',
			'substract',
			'power',
			'root',
			'divide',
		];

		if (basicOperations.includes(command) && !base && !power)
			this.calculateSequentially(command);
		else this.calculateImmediately(command, base, power);
	}

	calculateSequentially(command) {
		if (this.leftOperand !== null && !this.isNewOperand) {
			this.calculateExpression();
		} else {
			this.leftOperand = parseFloat(this.currentOperand);
		}

		this.operationType = command;
		this.isNewOperand = true;
		this.updateDisplay();
	}

	calculateExpression() {
		if (!this.operationType || this.leftOperand === null) return;

		const left = this.leftOperand;
		const right = parseFloat(this.currentOperand);

		this.invoker.setCommand(this.commands[this.operationType]);
		const result = this.invoker.pressButton(left, right);

		this.currentOperand = result;
		this.leftOperand = result;
		this.operationType = null;
		this.isNewOperand = true;
		this.updateDisplay();
	}

	calculateImmediately(command, base, power) {
		if (command != 'undo' && command !== 'equal') {
			if (
				this.operationType && (command.includes('memory_add') ||
					command.includes('substract'))
			) return;
			else this.invoker.setCommand(this.commands[command]);
		}

		switch (command) {
			case 'power':
				this.currentOperand = this.invoker.pressButton(
					base || this.currentOperand,
					power || this.currentOperand,
				);
				break;

			case 'root':
				this.currentOperand = this.invoker.pressButton(
					this.currentOperand,
					power,
				);
				break;

			case 'divide':
				this.currentOperand = this.invoker.pressButton(
					base,
					this.currentOperand,
				);
				break;

			case 'memory_add':
				if (!this.operationType) {
					this.invoker.pressButton(this.currentOperand ?? 0);
				}
				break;

			case 'memory_substract':
				if (!this.operationType) {
					this.invoker.pressButton(this.currentOperand ?? 0);
				}
				break;

			case 'memory_recall':
				const rememberedValue = this.invoker.pressButton(
					this.currentOperand,
				);
				if (this.operationType) this.appendOperand(rememberedValue);
				else this.currentOperand = rememberedValue;
				break;

			case 'memory_clear':
				this.invoker.pressButton();
				break;

			case 'toggle':
				if (this.isNewOperand)
					this.leftOperand = this.invoker.pressButton(
						this.leftOperand,
					);
				else
					this.currentOperand = this.invoker.pressButton(
						this.currentOperand,
					);
				break;

			case 'undo':
				const result = this.invoker.pressUndo();
				this.currentOperand = result;
				this.leftOperand = result;
				break;

			case 'clear':
				this.currentOperand = this.invoker.pressButton();
				this.resetDisplay();
				break;

			case 'equal':
				this.calculateExpression();
				this.leftOperand = null;
				break;

			case 'factorial':
				this.currentOperand = this.invoker.pressButton(
					this.currentOperand,
				);
				break;

			case 'percent':
				if (
					this.operationType === 'sum' ||
					this.operationType === 'substract'
				)
					this.currentOperand = this.invoker.pressButton(
						this.currentOperand,
						this.leftOperand,
					);
				else
					this.currentOperand = this.invoker.pressButton(
						this.currentOperand,
					);

				break;
		}

		this.updateDisplay();
	}
}
