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
export class Power_10Command extends CalculatorCommand {
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
	execute(left, right) {
		return this.calculator.root(left, right);
	}
}

export class ClearCommand extends CalculatorCommand {
	execute() {
		this.calculator.clear();
	}
}

export class DivisionCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.divide(left, right);
	}
}

export class ToggleSignCommand extends CalculatorCommand {
	execute(number) {
		return this.calculator.toggle(number);
	}
}
export class SquareCommand extends CalculatorCommand {
	execute(base, exponent) {
		return this.calculator.square(base, exponent);
	}
}

export class PercentCommand extends CalculatorCommand {
	execute(number, numberDepending) {
		return this.calculator.percent(number, numberDepending);
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
