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
			const result = this.command.execute(...numbers);

			if (!Number.isFinite(result) || Number.isNaN(result)) {
				throw new Error(result.message);
			}

			return result;
		} catch (error) {
			console.error(`[Invoker] Error: ${error.message}`);
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
