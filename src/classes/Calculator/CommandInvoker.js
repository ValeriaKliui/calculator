export class CommandInvoker {
	constructor() {
		this.command = null;
		this.history = [];
		this.error = null;
	}

	setCommand(command) {
		this.command = command;
		this.history.push(command);
	}
	pressButton(...numbers) {
		try {
			const result = this.command.execute(...numbers);

			if (!Number.isFinite(result)) {
				throw new Error(result.message);
			}

			return result;
		} catch (error) {
			this.logError(`${error.message}`);
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
	logError(message) {
		this.error = message;
	}
	getError() {
		return this.error;
	}
	resetError() {
		this.error = null;
	}
}
