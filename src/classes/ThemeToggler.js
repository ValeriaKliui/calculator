export class ThemeToggler {
	constructor(selector) {
		this.selector = selector;
		document.addEventListener('DOMContentLoaded', this.setInitTheme);
	}

	subscribeOnClick() {
		const toggler = document.getElementById('theme-toggler');
		toggler.addEventListener('change', this.toggleTheme);
	}
	toggleTheme({ target }) {
		this.setTheme();
		// this.setTheme(target.checked ? 'dark' : 'light');
		// console.log(this)
	}
	setTheme(theme) {
		// document.documentElement.setAttribute('data-theme', theme);
		// localStorage.setItem('theme', theme);
	}

	setInitTheme() {
		// const initTheme = localStorage.getItem('theme') || 'light';
		// const themeToggler = document.querySelector('.theme-toggler__checkbox');
		// themeToggler.checked = initTheme === 'dark';
		// this.setTheme(initTheme);
	}
}
