export class CalculatorButtons {
	constructor() {
		this.command = null;
		this.history = [];
	}

	setCommand(command) {
		this.command = command;
		this.history.push(command);
	}
	pressButton(value, ...params) {
		this.command.execute(value, ...params);
	}
	undoButton() {
		const lastCommand = this.history.pop();

		if (lastCommand) {
			lastCommand.undo();
		}
	}
}
