import './styles/global.scss';
import './styles/calculator.scss';
import './styles/theme-toggler.scss';
import { ButtonHandler } from './classes/ButtonHandler';
import { BUTTONS_DATA, BUTTON_CLASS_DEFAULT } from './constants';
import { Button } from './classes/Button';
import { ButtonContainer } from './classes/ButtonsContainer';

const calculatorButtons = document.querySelector('.calculator__buttons');
const button = new ButtonHandler(
	document.querySelector('.calculator__display'),
);

calculatorButtons.addEventListener('click', (value) => {
	const buttonClicked = value.target.closest('button');
	if (buttonClicked) button.handleClick(buttonClicked);
});

const buttons = new ButtonContainer(
	'.calculator__buttons',
	BUTTONS_DATA,
	BUTTON_CLASS_DEFAULT,
);
buttons.render();
