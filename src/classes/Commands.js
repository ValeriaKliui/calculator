class Command {
	execute() {
		throw 'Method execute() should be implemented by subclasses';
	}
	undo() {
		throw 'Method undo() should be implemented by subclasses';
	}
}

class CalculatorCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
		this.error = null;
	}

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
export class SubstractCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.substract(left, right);
	}
}
export class PowerCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.power(left, right);
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

export class ClearCommand extends CalculatorCommand {
	execute() {
		this.calculator.clear();
	}
}

export class ToggleSignCommand extends CalculatorCommand {
	execute(number) {
		return this.calculator.toggle(number);
	}
}

export class PercentCommand extends CalculatorCommand {
	execute(number, baseNumber) {
		return this.calculator.percent(number, baseNumber);
	}
}
export class MemoryAddCommand extends CalculatorCommand {
	execute(firstValue) {
		return this.calculator.memory_add(firstValue);
	}
}
export class MemorySubstractCommand extends CalculatorCommand {
	execute(firstValue) {
		return this.calculator.memory_substract(firstValue);
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
export class FactorialCommand extends CalculatorCommand {
	execute(value) {
		return this.calculator.factorial(value);
	}
}
