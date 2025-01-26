export class Calculator {
	constructor() {
		this.value = 0;
		this.history = [];
	}

	sum(numbers) {
		this.history.push(this.value);
		this.value = numbers.reduce((acc, curr) => acc + curr, 0);
		console.log(this.history);
	}
	uncalculate() {
		this.value = this.history.pop();
	}
	multiply(numbers) {
		this.history.push(this.value);
		this.value = numbers.reduce((acc, curr) => acc * curr, 1);
	}
	clear() {
		this.history.push(this.value);
	}
	getValue() {
		return this.value;
	}
}
