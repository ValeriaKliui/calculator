export class Button {
	constructor({ className = "", text = "", classExtra = "", onClick = null, eventHandlers = {}, ...datasets }) {
		this.className = [className, classExtra].filter(Boolean).join(" ");
		this.text = text;
		this.onClick = onClick;
		this.datasets = datasets;
		this.button = null;
		this.eventHandlers = eventHandlers;
	}

	setEventListeners() {
		const eventHandlers = Object.values(this.eventHandlers);

		if (eventHandlers.length > 0) {
			eventHandlers.forEach(({ eventType, handler }) => {
				if (handler) this.button.addEventListener(eventType, handler);
			});
		}
	}

	removeEventListener(eventType, handler) {
		if (this.button && handler) this.button.removeEventListener(eventType, handler);
	}

	getButton() {
		this.button = document.createElement("button");
		this.button.className = this.className;
		this.button.textContent = this.text;
		this.setEventListeners();

		Object.entries(this.datasets).forEach(([name, value]) => (this.button.dataset[name] = value));

		return this.button;
	}
}
