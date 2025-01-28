import {
	calculateDivision,
	calculateExponent,
	calculateMultiply,
	calculateSum,
} from '../utils/math';

export class Receiver {
	constructor() {
		this.value = '';
		this.history = [];
	}

	sum(left, right) {
		this.history.push(this.value);
		return (this.value = calculateSum(left, right));
	}

	multiply(left, right) {
		this.history.push(this.value);
		return (this.value = calculateMultiply(left, right));
	}
	square(base, exponent) {
		this.history.push(this.value);
		return (this.value = calculateExponent(base, exponent));
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
	divide(left, right) {
		this.history.push(this.value);

		return (this.value = calculateDivision(left, right));
	}
	clear() {
		this.history.push(this.value);
	}
	uncalculate() {
		return (this.value = this.history.pop());
	}
	getValue() {
		return this.value;
	}
}
