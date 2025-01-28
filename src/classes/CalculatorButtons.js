export class Invoker {
	constructor() {
		this.command = null;
		this.history = [];
	}

	setCommand(command) {
		this.command = command;
		this.history.push(command);
	}
	pressButton(...numbers) {
		try {
			return this.command.execute(...numbers);
		} catch (error) {
			alert(`Error: ${error.message}`);
			return 0;
		}
	}
	pressUndo() {
		const lastCommand = this.history.pop();

		if (lastCommand) {
			return lastCommand.undo();
		}
		return 0;
	}
}
