export class CalculatorButtons {
	constructor() {
		this.command = null;
		this.history = [];
	}

	setCommand(command) {
		this.command = command;
		this.history.push(command);
	}
	pressButton(value) {
		this.command.execute(value);
	}
	undoButton() {
		const lastCommand = this.history.pop();

		if (lastCommand) {
			lastCommand.undo();
		}
	}
}
