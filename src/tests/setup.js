import { CalculatorEngine } from "../features/Calculator/CalculatorEngine";
import { CommandInvoker } from "../features/Calculator/CommandInvoker";
import {
	DivisionCommand,
	FactorialCommand,
	MultiplyCommand,
	PercentCommand,
	PowerCommand,
	RootCommand,
	SubstractCommand,
	SumCommand,
	ToggleSignCommand,
} from "../features/Calculator/Commands";

beforeEach(() => {
	jest.spyOn(console, "error").mockImplementation(() => {});
	global.alert = jest.fn();
});

afterEach(() => {
	jest.restoreAllMocks();
	resetError();
});

const calculatorEngine = new CalculatorEngine();

const commands = {
	sum: new SumCommand(calculatorEngine),
	substract: new SubstractCommand(calculatorEngine),
	multiply: new MultiplyCommand(calculatorEngine),
	divide: new DivisionCommand(calculatorEngine),
	toggle: new ToggleSignCommand(calculatorEngine),
	power: new PowerCommand(calculatorEngine),
	root: new RootCommand(calculatorEngine),
	percent: new PercentCommand(calculatorEngine),
	factorial: new FactorialCommand(calculatorEngine),
};
const commandInvoker = new CommandInvoker();

export const getOperationResult = (commandName, ...variables) => {
	const command = commands[commandName];
	commandInvoker.setCommand(command);

	return commandInvoker.pressButton(...variables);
};

export const getError = () => {
	return commandInvoker.getError();
};
export const resetError = () => {
	return commandInvoker.resetError();
};
