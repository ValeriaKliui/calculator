import { Receiver } from '../classes/Calculator';
import { Invoker } from '../classes/CalculatorButtons';
import {
	ClearCommand,
	SquareCommand,
	DivisionCommand,
	MultiplyCommand,
	SubstractCommand,
	SumCommand,
	ToggleSignCommand,
	PowerCommand,
	RootCommand,
	PercentCommand,
	MemoryAddCommand,
	MemorySubstractCommand,
	MemoryClearCommand,
	MemoryRecallCommand,
	Root_yCommand,
	FactorialCommand,
} from '../classes/Commands';

const calculatorEngine = new Receiver();

const commands = {
	sum: new SumCommand(calculatorEngine),
	substract: new SubstractCommand(calculatorEngine),
	multiply: new MultiplyCommand(calculatorEngine),
	divide: new DivisionCommand(calculatorEngine),
	toggle: new ToggleSignCommand(calculatorEngine),
	square: new SquareCommand(calculatorEngine),
	power: new PowerCommand(calculatorEngine),
	root: new RootCommand(calculatorEngine),
	percent: new PercentCommand(calculatorEngine),
	root_y: new Root_yCommand(calculatorEngine),
	factorial: new FactorialCommand(calculatorEngine),
};
const buttons = new Invoker();

export const getOperationResult = (commandName, ...variables) => {
	const command = commands[commandName];
	buttons.setCommand(command);

	return buttons.pressButton(...variables);
};
