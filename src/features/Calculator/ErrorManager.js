export class ErrorManager extends Error {
	#error = null;

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
