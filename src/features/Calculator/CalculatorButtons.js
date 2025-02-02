import { Button } from "./Button";

export class CalculatorButtons {
	constructor({ container, buttonsData, defaultClass = "", onClick }) {
		this.container = container;
		this.buttonsData = buttonsData;
		this.defaultClass = defaultClass;
		this.onClick = onClick;
	}

	render() {
		const buttons = this.buttonsData.map((buttonData) =>
			new Button({
				className: this.defaultClass,
				onClick: this.onClick,
				...buttonData,
			}).getButton(),
		);

		buttons.forEach((button) => this.container.appendChild(button));
	}
}
