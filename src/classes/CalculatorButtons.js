export class Invoker {
	constructor() {
		this.command = null;
		this.history = [];
	}

	setCommand(command) {
		this.command = command;
		this.history.push(command); //возможно тут
	}
	pressButton(value, ...params) {
		try {
			return this.command.execute(value, ...params);
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
	}
}
