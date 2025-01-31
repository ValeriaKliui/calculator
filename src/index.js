import './styles/global.scss';
import './styles/calculator.scss';
import './styles/theme-toggler.scss';
import { BUTTONS_DATA, BUTTON_CLASS_DEFAULT } from './constants';
import { Buttons } from './classes/Buttons';
import { CalculatorHandler } from './classes/CalculatorHandler';
import { ThemeToggler } from './classes/ThemeToggler';

const buttons = new Buttons(
	'.calculator__buttons',
	BUTTONS_DATA,
	BUTTON_CLASS_DEFAULT,
);
buttons.render();

const displayElement = document.querySelector('.calculator__display');
const displayError = document.querySelector('.calculator__error');

new CalculatorHandler(displayElement, displayError).create();

new ThemeToggler({
	togglerSelector: '.theme-toggler',
	togglerCheckboxSelector: '.theme-toggler__checkbox',
});
