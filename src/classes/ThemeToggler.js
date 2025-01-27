export class ThemeToggler {
	constructor(selector) {
		this.selector = selector;
	}
	sdfsf() {
		const toggler = document.getElementById('theme-toggler');
		toggler.addEventListener('change', this.toggleTheme);
		document.addEventListener('DOMContentLoaded', this.setInitTheme);
	}
	toggleTheme({ target }) {
		setTheme(target.checked ? 'dark' : 'light');
	}
	setTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme);

		localStorage.setItem('theme', theme);
	}

	setInitTheme() {
		const initTheme = localStorage.getItem('theme') || 'light';
		const themeToggler = document.querySelector('.theme-toggler__checkbox');

		themeToggler.checked = initTheme === 'dark';
		setTheme(initTheme);
	}
}
