import { calculateSum } from '../utils/math';

describe('tests for sum operation', () => {
	it('should handle wrong values', () => {
		const wrongValues = ['', null, true, 'string', NaN, undefined, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateSum(wrongValue, wrongValue);
			expect(result).toBe(0);
		});
	});

	it('should handle absence of arguments', () => {
		const withoutArgs = calculateSum();

		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculateSum(7);

		expect(withoutSecArg).toBe(7);
	});

	it('should handle decimal numbers', () => {
		const testVars = [
			{ numbers: [0.12313132, 0.3737373737], output: 0.4968686937 },
			{ numbers: [0.21312322], output: 0.21312322 },
			{ numbers: [0.1, 0.2], output: 0.3 },
		];

		testVars.forEach(({ numbers, output }) => {
			const result = calculateSum(...numbers);
			expect(result).toBeCloseTo(output, 10);
		});
	});

	it('should return correct sum', () => {
		expect(calculateSum(10, 20)).toBe(30);
		expect(calculateSum('10', '20')).toBe(30);
		expect(calculateSum(0.5, 1.5)).toBe(2);
	});
});
