import { Button } from "./Button";

export class CalculatorButtons {
	constructor({ container, buttonsData, defaultClass = "", onClick }) {
		this.container = container;
		this.buttonsData = buttonsData;
		this.defaultClass = defaultClass;
		this.onClick = onClick;
		this.buttons = null;
		this.eventHandlers = [];
	}

	getEventHandlers() {
		this.eventHandlers = [{ eventType: "click", handler: this.onClick }];
	}

	removeEventHandler(removedEvent, removedHandler) {
		this.buttons.forEach((button) => button.removeEventListener(removedEvent, removedHandler));
		this.eventHandlers = this.eventHandlers.filter(({ eventType }) => eventType !== removedEvent);
	}

	createButtons() {
		this.getEventHandlers();

		this.buttons = this.buttonsData.map((buttonData) =>
			new Button({
				className: this.defaultClass,
				eventHandlers: this.eventHandlers,
				...buttonData,
			}).getButton(),
		);
	}

	render() {
		this.createButtons();
		this.buttons.forEach((button) => this.container.appendChild(button));
	}
}
