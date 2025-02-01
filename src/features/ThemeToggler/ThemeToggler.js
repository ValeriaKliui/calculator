export class ThemeToggler {
	constructor({ toggler, togglerCheckbox }) {
		this.toggler = toggler;
		this.togglerCheckbox = togglerCheckbox;

		this.init();
	}
	init() {
		document.addEventListener("DOMContentLoaded", () => this.setInitialTheme());
		this.togglerCheckbox.addEventListener("change", () => this.toggleTheme());
	}
	setInitialTheme() {
		const savedTheme = localStorage.getItem("theme") || "light";
		this.togglerCheckbox.checked = savedTheme === "dark";
		this.setTheme(savedTheme);
	}

	toggleTheme() {
		const newTheme = this.togglerCheckbox.checked ? "dark" : "light";
		this.setTheme(newTheme);
	}

	setTheme(theme) {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}
}
