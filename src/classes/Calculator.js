import {
	calculateDivision,
	calculateExponent,
	calculateMultiply,
	calculateRoot,
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
	root(base, exponent){

		this.history.push(this.value);

		const result =calculateRoot(base, exponent)
		if (result == NaN) 			throw new Error('An even root of a negative number does not exist in real numbers.');
		return (this.value = result);

	}
	toggle(number) {
		this.history.push(this.value);
		return (this.value = number * -1);
	}
	divide(left, right) {
		this.history.push(this.value);

		const result =calculateDivision(left, right)
		if (result == NaN) 			throw new Error('Division by zero is impossible.');
		return (this.value = result);
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
