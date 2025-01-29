import { ROUNDING_PRECISION } from '../constants';
import { getOperationResult } from './setup';

describe('tests for divide operation', () => {
	const calculateDivision = (...values) =>
		getOperationResult('divide', ...values);

	it('should handle wrong values', () => {
		const wrongValues = ['', null, true, 'string', NaN, undefined, 0, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateDivision(wrongValue, wrongValue);

			expect(result).toBe(0);
		});
	});

	it('should throw error on dividing by zero', () => {
		const result = calculateDivision(876, 0);

		expect(global.alert).toHaveBeenCalledWith(
			expect.stringMatching(/Error:/),
		);
		expect(result).toBe(0);
	});

	it('should throw error on infinity', () => {
		const result = calculateDivision(Infinity, Infinity);

		expect(global.alert).toHaveBeenCalledWith(
			expect.stringMatching(/Error:/),
		);
		expect(result).toBe(0);
	});

	it('should handle absence of arguments', () => {
		const withoutArgs = calculateDivision();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculateDivision(7);
		expect(withoutSecArg).toBe(7);
	});

	it('should handle division of zero', () => {
		const result = calculateDivision(0, 76);

		expect(result).toBe(0);
	});

	it('should handle decimal numbers', () => {
		const testVars = [
			{
				numbers: [0.12313132, 0.3737373737],
				output: 0.12313132 / 0.3737373737,
			},
			{
				numbers: [0.21312322, 0.2342342424],
				output: 0.21312322 / 0.2342342424,
			},
			{ numbers: [0.1, 0.2], output: 0.1 / 0.2 },
		];

		testVars.forEach(({ numbers, output }) => {
			const result = calculateDivision(...numbers);

			expect(result).toBeCloseTo(output, ROUNDING_PRECISION);
		});
	});

	it('should return correct divided value', () => {
		expect(calculateDivision(10, 20)).toBe(0.5);
		expect(calculateDivision('10', '20')).toBe(0.5);
		expect(calculateDivision(-2, -3)).toBeCloseTo(
			0.66666666666,
			ROUNDING_PRECISION,
		);
		expect(calculateDivision(2, -3)).toBeCloseTo(
			-0.66666666666,
			ROUNDING_PRECISION,
		);
		expect(calculateDivision(0, -3)).toBe(0);
	});
});
