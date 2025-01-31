export class ImmediateCommandProcessor {
	constructor(calculatorState, commandInvoker, calculateExpression, commands) {
		this.calculatorState = calculatorState;
		this.commandInvoker = commandInvoker;
		this.calculateExpression = calculateExpression;
		this.commands = commands;
	}

	calculateImmediately(command, base, power) {
		if (command === "undo") {
			this.handleUndo();
		} else if (command === "equal") {
			this.handleEqual();
		} else {
			this.handleMemoryAndSpecialCommands(command, base, power);
		}
	}

	handleMemoryAndSpecialCommands(command, base, power) {
		const isResultOfCalculation = !this.calculatorState.operationType;

		if ((!isResultOfCalculation && command.includes("memory_add")) || command.includes("substract")) return;

		this.commandInvoker.setCommand(this.commands[command]);
		this.executeCommand(command, base, power);
	}

	executeCommand(command, base, power) {
		const operands = this.getOperandsForCommand(command, base, power);

		if (operands) {
			const result = this.commandInvoker.pressButton(...operands);
			this.calculatorState.currentOperand = result;
		} else {
			this.handleSpecialCommands(command);
		}
	}

	getOperandsForCommand(command, base, power) {
		const commandsMap = {
			power: [base || this.calculatorState.currentOperand, power || this.calculatorState.currentOperand],
			root: [this.calculatorState.currentOperand, power],
			divide: [base, this.calculatorState.currentOperand],
			factorial: [this.calculatorState.currentOperand],
			percent: [
				this.calculatorState.currentOperand,
				["sum", "substract"].includes(this.calculatorState.operationType)
					? this.calculatorState.leftOperand
					: null,
			],
		};
		return commandsMap[command];
	}

	handleEqual() {
		if (this.calculatorState.operationType) {
			this.calculateExpression();
			this.calculatorState.leftOperand = null;
		}
	}

	handleUndo() {
		const result = this.commandInvoker.pressUndo();
		this.calculatorState.currentOperand = result;
		this.calculatorState.leftOperand = result;
	}

	handleToggleSign() {
		if (this.calculatorState.isStartOfOperand) {
			this.calculatorState.leftOperand = this.commandInvoker.pressButton(this.calculatorState.leftOperand);
		} else {
			this.calculatorState.currentOperand = this.commandInvoker.pressButton(this.calculatorState.currentOperand);
		}
	}
	handleMemoryAddOrSubtract() {
		if (!this.calculatorState.operationType) {
			this.commandInvoker.pressButton(this.calculatorState.currentOperand ?? 0);
		}
	}

	handleMemoryRecall() {
		const rememberedValue = this.commandInvoker.pressButton(this.calculatorState.currentOperand);
		if (this.calculatorState.operationType) {
			this.calculatorState.setOperand(rememberedValue);
		} else {
			this.calculatorState.currentOperand = rememberedValue;
		}
	}

	handleSpecialCommands(command) {
		switch (command) {
			case "memory_add":
			case "memory_substract":
				this.handleMemoryAddOrSubtract();
				break;
			case "memory_recall":
				this.handleMemoryRecall();
				break;
			case "memory_clear":
				this.commandInvoker.pressButton();
				break;
			case "toggle":
				this.handleToggleSign();
				break;
			case "clear":
				this.calculatorState.resetState();
				break;
		}
	}
}
