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

export class MultiplyCommand extends CalculatorCommand {
	execute(left, right) {
		return this.calculator.multiply(left, right);
	}
}

export class ClearCommand extends CalculatorCommand {
	execute() {
		this.calculator.clear();
	}
}

export class DivisionCommand extends CalculatorCommand {
	execute(left, right) {
		if (right === 0) {
			throw new Error('Division by zero is impossible.');
		}
		return this.calculator.divide(left, right);
	}
}

export class ToggleSignCommand extends CalculatorCommand {
	execute(numbers) {
		return this.calculator.toggle(numbers);
	}
}
export class SquareCommand extends CalculatorCommand {
	execute(base, exponent) {
		return this.calculator.square(base, exponent);
	}
}
