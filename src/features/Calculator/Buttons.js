import { Button } from "./Button";

export class Buttons {
	constructor(container, buttonsData, defaultClass = "") {
		this.container = container;
		this.buttonsData = buttonsData;
		this.defaultClass = defaultClass;
	}

	render() {
		const buttons = this.buttonsData.map((buttonData) =>
			new Button({
				className: this.defaultClass,
				...buttonData,
			}).getButton(),
		);

		buttons.forEach((button) => this.container.appendChild(button));
	}
}
