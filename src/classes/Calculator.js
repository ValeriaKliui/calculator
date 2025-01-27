export class Calculator {
	constructor() {
		this.value = '';
		this.history = [];
	}

	sum(numbers) {
		this.history.push(this.value);
		this.value = numbers.reduce((acc, curr) => acc + curr, 0);
	}

	multiply(numbers) {
		this.history.push(this.value);
		this.value = numbers.reduce((acc, curr) => acc * curr, 1);
	}
	square(numbers, exponent) {
		this.history.push(this.value);
		this.value = numbers[0] ** exponent;
	}
	setValue(newValue) {
		this.value = newValue;
	}

	toggleSign(numbers) {
		this.history.push(this.value);

		if (numbers.length === 1) {
			this.value = numbers[0] * -1;
		} else {
			const lastNumber = numbers.pop();
			numbers.push(lastNumber * -1);

			this.value = numbers
				.map((num, index) => (num < 0 || index === 0 ? num : `+${num}`))
				.join('');
		}
	}
	divide(numbers) {
		this.history.push(this.value);
		this.value = numbers[0] / numbers[1];
	}
	clear() {
		this.history.push(this.value);
	}
	uncalculate() {
		this.value = this.history.pop();
	}
	getValue() {
		return this.value;
	}
}
