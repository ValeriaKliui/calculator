import { getExpression } from '../utils/string';

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
			[
				'sum',
				'multiply',
				'substract',
				'divide',
				'power',
				'root_y',
			].includes(command)
		) {
			this.defineExpressionParams(command);
		} else {
			this.executeCommand(command);
		}
	}
	appendOperand(value) {
		if (value === '.' && String(this.currentOperand).includes('.')) return;

		if (this.isNewOperand) {
			this.currentOperand = value;
			this.isNewOperand = false;
		} else {
			this.currentOperand += value;
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
		console.log(left, right);

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

			case 'memory_add':
				if (!this.operationType) {
					this.invoker.setCommand(this.commands.memory_add);
					this.invoker.pressButton(this.currentOperand);
				}
				break;

			case 'memory_substract':
				if (!this.operationType) {
					this.invoker.setCommand(this.commands.memory_substract);
					this.invoker.pressButton(this.currentOperand);
				}
				break;

			case 'memory_recall':
				this.invoker.setCommand(this.commands.memory_recall);
				const rememberedValue = this.invoker.pressButton(
					this.currentOperand,
				);
				if (this.operationType) this.appendOperand(rememberedValue);
				else this.currentOperand = rememberedValue;

				break;

			case 'memory_clear':
				this.invoker.setCommand(this.commands.memory_clear);
				this.invoker.pressButton();
				break;

			case 'root':
				this.invoker.setCommand(this.commands.root);
				this.currentOperand = this.invoker.pressButton(
					currentOperand,
					2,
				);
				break;

			case 'root_3':
				this.invoker.setCommand(this.commands.root);
				this.currentOperand = this.invoker.pressButton(
					currentOperand,
					3,
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
				this.leftOperand = null;
				break;

			case 'factorial':
				this.invoker.setCommand(this.commands.factorial);
				this.currentOperand = this.invoker.pressButton(currentOperand);
				break;

			case 'percent':
				this.invoker.setCommand(this.commands.percent);
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
