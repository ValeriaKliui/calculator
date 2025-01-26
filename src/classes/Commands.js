import { Command } from './Command';

export class SummCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
	}

	execute(numbers) {
		this.calculator.calculateSum(numbers);
	}
	undo() {
		this.calculator.uncalculateSum();
	}
}
