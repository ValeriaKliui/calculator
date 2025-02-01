import "./styles/global.scss";
import "./styles/calculator.scss";
import "./styles/theme-toggler.scss";

import { BUTTON_CLASS_DEFAULT, BUTTONS_DATA } from "./constants";
import { Buttons } from "./features/Calculator/Buttons";
import { CalculatorController } from "./features/Calculator/CalculatorController";
import { ThemeToggler } from "./features/ThemeToggler/ThemeToggler";

const buttonsContainer = document.querySelector(".calculator__buttons");

const buttons = new Buttons(buttonsContainer, BUTTONS_DATA, BUTTON_CLASS_DEFAULT);
buttons.render();

const displayElement = document.querySelector(".calculator__display");
const displayError = document.querySelector(".calculator__error");

new CalculatorController(displayElement, displayError).create();

new ThemeToggler({
	togglerSelector: ".theme-toggler",
	togglerCheckboxSelector: ".theme-toggler__checkbox",
});
