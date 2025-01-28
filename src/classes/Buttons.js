import { Button } from './Button';

export class Buttons {
	constructor(containerSelector, buttonsData, defaultClass = '') {
		this.container = document.querySelector(containerSelector);
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
