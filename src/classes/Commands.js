import { Command } from './Command';

export class SumCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
	}

	execute(numbers) {
		this.calculator.sum(numbers);
	}
	undo() {
		this.calculator.uncalculate();
	}
}

export class MultiplyCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
	}

	execute(numbers) {
		this.calculator.multiply(numbers);
	}
	undo() {
		this.calculator.uncalculate();
	}
}

export class ClearCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
	}

	execute() {
		this.calculator.clear();
	}
	undo() {
		this.calculator.uncalculate();
	}
}
