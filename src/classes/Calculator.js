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
	substract(left, right) {
		this.history.push(this.value);
		return (this.value = calculateSum(left, right * -1));
	}
	power(base, exponent) {
		this.history.push(this.value);
		return (this.value = calculateExponent(base, exponent));
	}
	multiply(left, right) {
		this.history.push(this.value);
		return (this.value = calculateMultiply(left, right));
	}
	square(base, exponent) {
		this.history.push(this.value);
		return (this.value = calculateExponent(base, exponent));
	}
	toggle(left, right) {
		this.history.push(this.value);
		return (this.value = left * -1);
	}
	divide(left, right) {
		this.history.push(this.value);

		return (this.value = calculateDivision(left, right));
	}
	clear() {
		this.history = [];
	}
	uncalculate() {
		return (this.value = this.history.pop());
	}
	getValue() {
		return this.value;
	}
}
