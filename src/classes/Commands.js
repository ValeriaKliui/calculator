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
	}

	undo() {
		this.calculator.uncalculate();
	}
}

export class SumCommand extends CalculatorCommand {
	execute(numbers) {
		this.calculator.sum(numbers);
	}
}

export class MultiplyCommand extends CalculatorCommand {
	execute(numbers) {
		this.calculator.multiply(numbers);
	}
}

export class ClearCommand extends CalculatorCommand {
	execute() {
		this.calculator.clear();
	}
}

export class DivisionCommand extends CalculatorCommand {
	execute(numbers) {
		this.calculator.divide(numbers);
	}
}

export class ToggleSignCommand extends CalculatorCommand {
	execute(numbers) {
		this.calculator.toggleSign(numbers);
	}
}
export class SquareCommand extends CalculatorCommand {
	execute(numbers, exponent) {
		this.calculator.square(numbers, exponent);
	}
}
