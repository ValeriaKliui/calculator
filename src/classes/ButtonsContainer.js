import { Button } from './Button';

export class ButtonContainer {
	constructor(containerSelector, buttonsData, defaultClass) {
		this.container = document.querySelector(containerSelector);
		this.buttonsData = buttonsData;
		this.defaultClass = defaultClass;
	}

	render() {
		const buttons = this.buttonsData.map(
			({ classExtra, text, value, dataType }) => {
				const button = new Button({
					className: this.defaultClass,
					classExtra,
					text,
					value,
					dataType,
				});
				return button.getButton();
			},
		);

		buttons.forEach((button) => {
			this.container.appendChild(button);
		});
	}
}
