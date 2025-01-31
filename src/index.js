import "./styles/global.scss";
import "./styles/calculator.scss";
import "./styles/theme-toggler.scss";
import { BUTTONS_DATA, BUTTON_CLASS_DEFAULT } from "./constants";
import { ThemeToggler } from "./classes/ThemeToggler";
import { CalculatorController } from "./classes/Calculator/CalculatorController";
import { Buttons } from "./classes/Calculator/Buttons";

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
