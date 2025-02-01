export class Button {
	constructor({ className = "", text = "", classExtra = "", onClick = null, ...datasets }) {
		this.className = [className, classExtra].filter(Boolean).join(" ");
		this.text = text;
		this.onClick = onClick;
		this.datasets = datasets;
	}

	getButton() {
		const button = document.createElement("button");
		button.className = this.className;
		button.textContent = this.text;
		if (this.onClick) {
			button.addEventListener("click", this.onClick);
		}

		Object.entries(this.datasets).forEach(([name, value]) => (button.dataset[name] = value));

		return button;
	}
}
