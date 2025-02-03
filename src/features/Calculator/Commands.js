class Command {
	constructor(calculator) {
		if (new.target === Command) {
			throw new Error("Command is an abstract class.");
		}
		this.calculator = calculator;
		this.error = null;
	}
	execute() {
		throw "Method execute() should be implemented by subclasses";
	}
	undo() {
		throw "Method undo() should be implemented by subclasses";
	}
}

class CalculatorCommand extends Command {
	undo() {
		return this.calculator.uncalculate();
	}
}
export class DivisionCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.divide(left, right);
	}
}

export class SumCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.sum(left, right);
	}
}
export class SubtractCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.subtract(left, right);
	}
}
export class PowerCommand extends CalculatorCommand {
	execute(base, exponent) {
		return this.calculator.power(base, exponent);
	}
}

export class MultiplyCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.multiply(left, right);
	}
}
export class RootCommand extends CalculatorCommand {
	execute(base, exponent) {
		return this.calculator.root(base, exponent);
	}
}

export class ToggleSignCommand extends CalculatorCommand {
	execute(number) {
		return this.calculator.toggle(number);
	}
}
export class FactorialCommand extends CalculatorCommand {
	execute(number) {
		return this.calculator.factorial(number);
	}
}

export class PercentCommand extends CalculatorCommand {
	execute(number, baseNumber) {
		return this.calculator.percent(number, baseNumber);
	}
}
export class MemoryAddCommand extends CalculatorCommand {
	execute(number) {
		return this.calculator.memory_add(number);
	}
}
export class MemorySubtractCommand extends CalculatorCommand {
	execute(number) {
		return this.calculator.memory_subtract(number);
	}
}
export class MemoryClearCommand extends CalculatorCommand {
	execute() {
		return this.calculator.memory_clear();
	}
}
export class MemoryRecallCommand extends CalculatorCommand {
	execute() {
		return this.calculator.memory_recall();
	}
}
