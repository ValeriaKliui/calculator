import "./styles/global.scss";
import "./styles/calculator.scss";
import "./styles/theme-toggler.scss";

import { BUTTON_CLASS_DEFAULT, BUTTONS_DATA } from "@constants";
import { CalculatorButtons } from "@features/Calculator/CalculatorButtons";
import { CalculatorController } from "@features/Calculator/CalculatorController";
import { CalculatorDisplay } from "@features/Calculator/CalculatorDisplay";
import { ThemeToggler } from "@features/ThemeToggler/ThemeToggler";
import { CalculatorEngine } from "./features/Calculator/CalculatorEngine";
import { CommandInvoker } from "./features/Calculator/CommandInvoker";
import { CalculatorState } from "./features/Calculator/CalculatorState";

function initializeCalculator() {
	const displayElement = document.querySelector(".calculator__display");
	const displayErrorElement = document.querySelector(".calculator__error");
	const buttonsContainer = document.querySelector(".calculator__buttons");

	if (!displayElement || !buttonsContainer) {
		console.error("Missing required elements in DOM.");
		return;
	}

	const display = new CalculatorDisplay({ displayElement, displayErrorElement });

	const calculatorController = new CalculatorController({
		display,
		calculatorEngine: new CalculatorEngine(),
		commandInvoker: new CommandInvoker(),
		calculatorState: new CalculatorState(),
	});

	const onCalculatorButtonClick = (event) => {
		const target = event.target.closest("button");
		if (!target) return;
		calculatorController.handleClick(target.dataset);
	};
	const calculatorButtons = new CalculatorButtons({
		container: buttonsContainer,
		buttonsData: BUTTONS_DATA,
		defaultClass: BUTTON_CLASS_DEFAULT,
		onClick: onCalculatorButtonClick,
	});
	calculatorButtons.render();
}

function initializeThemeToggler() {
	const toggler = document.querySelector(".theme-toggler");
	const togglerCheckbox = document.querySelector(".theme-toggler__checkbox");

	new ThemeToggler({
		toggler,
		togglerCheckbox,
	});
}

initializeCalculator();
initializeThemeToggler();
