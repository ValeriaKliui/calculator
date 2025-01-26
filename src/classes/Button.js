export class Button {
	constructor({ className, text, value, dataType, classExtra }) {
		this.className =
			`${className}${classExtra ? ` ${classExtra}` : ''}` || '';
		this.text = text || '';
		this.value = value || '';
		this.dataType = dataType || '';
	}
	getButton() {
		const button = document.createElement('button');
		button.className = this.className;
		button.textContent = this.text;
		button.dataset.type = this.dataType;
		button.value = this.value;
		return button;
	}
}
