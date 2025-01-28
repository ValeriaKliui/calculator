import './styles/global.scss';
import './styles/calculator.scss';
import './styles/theme-toggler.scss';
// import { CalculatorHandler } from './classes/CalculatorHandler';
import { BUTTONS_DATA, BUTTON_CLASS_DEFAULT } from './constants';
// import { Button } from './classes/Button';
import { Buttons } from './classes/Buttons';
import { CalculatorHandler } from './classes/CalculatorHandler';
// import { ThemeToggler } from './classes/ThemeToggler';
// import { CalculatorTest } from './classes/CalculatorTest';
// import { CalculatorController } from './classes/CalculatorHandlerTest';

// const calculatorButtons = document.querySelector('.calculator__buttons');
// // const button = new CalculatorHandler(
// // 	document.querySelector('.calculator__display'),
// // );

const buttons = new Buttons(
	'.calculator__buttons',
	BUTTONS_DATA,
	BUTTON_CLASS_DEFAULT,
);
buttons.render();

const displayElement = document.querySelector('.calculator__display');
new CalculatorHandler(displayElement).create();

// const calculator = new CalculatorTest();
// const displayElement = document.querySelector(".calculator__display");
// new CalculatorController(calculator, displayElement);

// // calculatorButtons.addEventListener('click', (value) => {
// // 	const buttonClicked = value.target.closest('button');
// // 	if (buttonClicked) button.handleClick(buttonClicked);
// // });

// const themeToggler = new ThemeToggler('theme-toggler');
// themeToggler.subscribeOnClick();
