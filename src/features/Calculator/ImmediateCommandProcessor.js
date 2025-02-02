export class ImmediateCommandProcessor {
	constructor({ calculatorState, commandInvoker, calculateExpression, commands }) {
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
		const { operationType } = this.calculatorState.getCurrentState();
		const isResultOfCalculation = !operationType;

		if (!isResultOfCalculation && (command.includes("memory_add") || command.includes("memory_subtract"))) return;

		this.commandInvoker.setCommand(this.commands[command]);
		this.executeCommand(command, base, power);
	}

	executeCommand(command, base, power) {
		const operands = this.getOperandsForCommand(command, base, power);

		if (operands) {
			const result = this.commandInvoker.pressButton(...operands);
			this.calculatorState.updateState({ currentOperand: result });
		} else {
			this.handleSpecialCommands(command);
		}
	}

	getOperandsForCommand(command, base, power) {
		const { currentOperand, operationType, leftOperand } = this.calculatorState.getCurrentState();

		const commandsMap = {
			power: [base || currentOperand, power || currentOperand],
			root: [currentOperand, power],
			divide: [base, currentOperand],
			factorial: [currentOperand],
			percent: [currentOperand, ["sum", "subtract"].includes(operationType) ? leftOperand : null],
			toggle: [currentOperand],
		};
		return commandsMap[command];
	}

	handleSpecialCommands(command) {
		switch (command) {
			case "memory_add":
			case "memory_subtract":
				this.handleMemoryAddOrSubtract();
				break;
			case "memory_recall":
				this.handleMemoryRecall();
				break;
			case "memory_clear":
				this.commandInvoker.pressButton();
				break;

			case "clear":
				this.calculatorState.resetState();
				break;
		}
	}

	handleEqual() {
		const { operationType, isStartOfOperand } = this.calculatorState.getCurrentState();

		if (operationType && !isStartOfOperand) {
			this.calculateExpression();

			this.calculatorState.updateState({ leftOperand: null });
		}
	}

	handleUndo() {
		const result = this.commandInvoker.pressUndo();

		if (!result) this.calculatorState.resetState();

		this.calculatorState.resetState();
		this.calculatorState.updateState({ currentOperand: result });
	}
	handleMemoryAddOrSubtract() {
		const { operationType, currentOperand } = this.calculatorState.getCurrentState();

		if (!operationType) {
			this.commandInvoker.pressButton(currentOperand ?? 0);
		}
	}

	handleMemoryRecall() {
		const { operationType, currentOperand } = this.calculatorState.getCurrentState();

		const rememberedValue = this.commandInvoker.pressButton({ numbers: [currentOperand] });

		if (operationType) {
			this.calculatorState.setOperand(rememberedValue);
		} else {
			this.calculatorState.updateState({ currentOperand: rememberedValue });
		}
	}
}
