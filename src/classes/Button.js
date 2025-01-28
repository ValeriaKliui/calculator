export class Button {
	constructor({
		className = '',
		text = '',
		value = null,
		command = null,
		classExtra = '',
	}) {
		this.className = `${className}${classExtra ? ` ${classExtra}` : ''}`;
		this.text = text;
		this.value = value;
		this.command = command;
	}

	getButton() {
		const button = document.createElement('button');
		button.className = this.className;
		button.textContent = this.text;

		if (this.command) {
			button.dataset.command = this.command;
		}
		if (this.value) {
			button.dataset.value = this.value;
		}

		return button;
	}
}
