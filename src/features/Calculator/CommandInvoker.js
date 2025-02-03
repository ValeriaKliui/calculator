export class CommandInvoker {
	#command = null;
	#history = [];
	#error = null;

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
			console.error(error);
			this.logError(`${error.message || "Result is infinity"}`);
			return 0;
		}
	}

	pressUndo() {
		const lastCommand = this.#history.pop();
		return lastCommand ? lastCommand.undo() : 0;
	}

	logError(message) {
		this.#error = message;
	}

	getError() {
		return this.#error ? `Error: ${this.#error}` : null;
	}

	resetError() {
		this.#error = null;
	}
}
