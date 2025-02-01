export class Button {
	constructor({
		className = "",
		text = "",
		value = null,
		command = null,
		classExtra = "",
		power = null,
		base = null,
	}) {
		this.className = `${className}${classExtra ? ` ${classExtra}` : ""}`;
		this.text = text;
		this.value = value;
		this.command = command;
		this.power = power;
		this.base = base;
	}

	getButton() {
		const button = document.createElement("button");
		button.className = this.className;
		button.textContent = this.text;

		const datasets = ["command", "value", "power", "base"];
		datasets.forEach((value) => this[value] && (button.dataset[value] = this[value]));

		return button;
	}
}
