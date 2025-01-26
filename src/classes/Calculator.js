export class Calculator {
	constructor() {
		this.value = 0;
		this.history = [];
	}

	calculateSum(numbers) {
		this.history.push(this.value);
		this.value = numbers.reduce((acc, curr) => acc + curr, 0);
		console.log(this.history);
	}
	uncalculateSum() {
		this.value = this.history.pop();
	}
	getValue() {
		return this.value;
	}
}
