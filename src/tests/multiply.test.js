import { calculateMultiply } from '../utils/math';

describe('tests for sum operation', () => {
	it('should handle wrong values', () => {
		const wrongValues = ['', null, true, 'string', NaN, undefined, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateMultiply(wrongValue, wrongValue);

			expect(result).toBe(0);
		});
	});

	it('should handle absence of arguments', () => {
		const withoutArgs = calculateMultiply();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculateMultiply(7);
		expect(withoutSecArg).toBe(7);
	});

	it('should handle decimal numbers', () => {
		const testVars = [
			{
				numbers: [0.12313132, 0.3737373737],
				output: 0.04601877615701428,
			},
			{
				numbers: [0.21312322, 0.2342342424],
				output: 0.04992075597454852,
			},
			{ numbers: [0.1, 0.2], output: 0.2 },
		];

		testVars.forEach(({ numbers, output }) => {
			const result = calculateMultiply(...numbers);
			expect(result).toBeCloseTo(output, 10);
		});
	});
});
