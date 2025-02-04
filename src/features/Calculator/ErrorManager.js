export class ErrorManager {
	#error = null;

	logError(error, message) {
		console.error(error);
		this.#error = message;
	}

	getError() {
		return this.#error ? `Error: ${this.#error}` : null;
	}

	resetError() {
		this.#error = null;
	}
}
