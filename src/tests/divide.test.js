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

	// it('should throw error on dividing by zero', () => {
	// 	const result = calculateDivision(876, 0);

	// 	expect(global.alert).toHaveBeenCalledWith(
	// 		expect.stringMatching(/Error:/),
	// 	);
	// 	expect(result).toBe(0);
	// });

	// it('should throw error on infinity', () => {
	// 	const result = calculateDivision(Infinity, Infinity);

	// 	expect(global.alert).toHaveBeenCalledWith(
	// 		expect.stringMatching(/Error:/),
	// 	);
	// 	expect(result).toBe(0);
	// });

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
		expect(calculateDivision(0.12313132, 0.3737373737)).toBeCloseTo(
			0.12313132 / 0.3737373737,
			ROUNDING_PRECISION,
		);
		expect(calculateDivision(0.21312322, 0.2342342424)).toBeCloseTo(
			0.21312322 / 0.2342342424,
			ROUNDING_PRECISION,
		);
		expect(calculateDivision(0.1, 0.2)).toBeCloseTo(
			0.1 / 0.2,
			ROUNDING_PRECISION,
		);
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

	it('should handle 1/x', () => {
		expect(calculateDivision(1, 20)).toBe(0.05);
		expect(calculateDivision(1, -120)).toBeCloseTo(
			-0.00833333333,
			ROUNDING_PRECISION,
		);
		expect(calculateDivision(1, 0.005)).toBe(200);
	});
});
