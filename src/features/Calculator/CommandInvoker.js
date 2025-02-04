export class CommandInvoker {
	#command = null;
	#history = [];

	constructor(errorManager) {
		this.errorManager = errorManager;
	}

	setCommand(command) {
		this.#command = command;
		this.#history.push(command);
	}

	pressButton(...numbers) {
		try {
			const result = this.#command.execute(...numbers);

			if (!Number.isFinite(result)) {
				throw new Error(result.message);
			}

			return result;
		} catch (error) {
			this.errorManager.logError(error, `${error.message || "Result is infinity"}`);
			return 0;
		}
	}

	pressUndo() {
		const lastCommand = this.#history.pop();
		return lastCommand ? lastCommand.undo() : 0;
	}

	getError() {
		return this.errorManager.getError();
	}

	resetError() {
		this.errorManager.resetError();
	}
}
