import { getExpression,  } from '../utils/string';

export class Client {
	constructor(commands, invoker, receiver, displayElement) {
		this.commands = commands;
		this.invoker = invoker;
		this.receiver = receiver;
		this.displayElement = displayElement;

		this.resetState();
	}

	resetState() {
		this.currentOperand = '0';
		this.expression = '';
		this.isNewOperand = true;
		this.leftOperand = null;
		this.operationType = null;
	}

	handleButtonClick(buttonClicked) {
		const { value, command } = buttonClicked.dataset;

		if (value) {
			this.appendOperand(value);
		} else if (command) {
			this.processCommand(command);
		}

		this.updateExpression();
	}

	processCommand(command) {
		if (
			['sum', 'multiply', 'substract', 'divide', 'power'].includes(
				command,
			)
		) {
			this.defineExpressionParams(command);
		} else {
			this.executeCommand(command);
		}
	}
	appendOperand(number) {
		if (this.isNewOperand) {
			this.currentOperand = number;
			this.isNewOperand = false;
		} else {
			this.currentOperand += number;
		}

		this.updateExpression();
	}

	defineExpressionParams(command) {
		if (this.leftOperand !== null && !this.isNewOperand) {
			this.calculate();
		} else {
			this.leftOperand = parseFloat(this.currentOperand);
		}

		this.operationType = command;
		this.isNewOperand = true;
		this.updateExpression();
	}

	calculate() {
		if (!this.operationType || this.leftOperand === null) return;

		const left = this.leftOperand;
		const right = parseFloat(this.currentOperand);

		this.invoker.setCommand(this.commands[this.operationType]);
		const result = this.invoker.pressButton(left, right);

		this.updateCalculationResult(result);
	}

	updateCalculationResult(result) {
		this.currentOperand = result;
		this.leftOperand = result;
		this.operationType = null;
		this.isNewOperand = true;
		this.updateExpression();
	}

	executeCommand(command) {
		const currentOperand = parseFloat(this.currentOperand);

		switch (command) {
			case 'square':
				this.invoker.setCommand(this.commands.square);
				this.currentOperand = this.invoker.pressButton(
					currentOperand,
					2,
				);
				break;

			case 'cube':
				this.invoker.setCommand(this.commands.square);
				this.currentOperand = this.invoker.pressButton(
					currentOperand,
					3,
				);
				break;

				case 'root': 
				this.invoker.setCommand(this.commands.root);
				this.currentOperand = this.invoker.pressButton(
					currentOperand,
					2,
				);
				break;

			case 'power_10':
					this.invoker.setCommand(this.commands.square);
					this.currentOperand = this.invoker.pressButton(
						10,
						currentOperand,
					);
					break;

					case 'reciprocal':
						this.invoker.setCommand(this.commands.divide);
					this.currentOperand = this.invoker.pressButton(
						1,
						currentOperand,
					);
					break;

			case 'toggle':
				this.invoker.setCommand(this.commands.toggle);

				if (this.isNewOperand)
					this.leftOperand = this.invoker.pressButton(
						this.leftOperand,
					);
				else
					this.currentOperand =
						this.invoker.pressButton(currentOperand);
				break;

			case 'undo':
				const result = this.invoker.pressUndo();
				this.currentOperand = result;
				this.leftOperand = result;
				break;

			case 'clear':
				this.invoker.setCommand(this.commands.clear);
				this.currentOperand = this.invoker.pressButton();
				this.resetState();
				break;

			case 'equal':
				this.calculate();
				this.leftOperand = null
				break;
		}

		this.updateExpression();
	}

	updateExpression() {
		const rightOperand = !this.isNewOperand ? this.currentOperand : '';

		this.expression = getExpression(
			this.currentOperand,
			this.leftOperand,
			this.operationType,
			rightOperand,
		);
		this.displayElement.value = this.expression;
	}
}
