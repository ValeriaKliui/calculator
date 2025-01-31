import { ROUNDING_PRECISION } from '../constants';
import { getOperationResult } from './setup';

describe('tests for multiply operation', () => {
	const calculateMultiply = (...values) =>
		getOperationResult('multiply', ...values);

	it('should handle wrong values', () => {
		const wrongValues = ['', null, true, 'string', NaN, undefined, 0, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateMultiply(wrongValue, wrongValue);

			expect(result).toBe(0);
		});
	});

	// it('should throw error on infinity', () => {
	// 	const result = calculateMultiply(Infinity, Infinity);

	// 	expect(global.alert).toHaveBeenCalledWith(
	// 		expect.stringMatching(/Error:/),
	// 	);
	// 	expect(result).toBe(0);
	// });

	it('should handle absence of arguments', () => {
		const withoutArgs = calculateMultiply();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculateMultiply(7);
		expect(withoutSecArg).toBe(7);
	});

	it('should handle decimal numbers', () => {
		expect(calculateMultiply(0.12313132, 0.3737373737)).toBeCloseTo(
			0.12313132 * 0.3737373737,
			ROUNDING_PRECISION,
		);
		expect(calculateMultiply(0.21312322, 0.2342342424)).toBeCloseTo(
			0.21312322 * 0.2342342424,
			ROUNDING_PRECISION,
		);
		expect(calculateMultiply(0.1, 0.2)).toBeCloseTo(
			0.1 * 0.2,
			ROUNDING_PRECISION,
		);
	});

	it('should return correct multiplied value', () => {
		expect(calculateMultiply(10, 20)).toBe(200);
		expect(calculateMultiply('10', '20')).toBe(200);
		expect(calculateMultiply(0.5, 1.5)).toBe(0.75);
		expect(calculateMultiply(-2, -3)).toBe(6);
		expect(calculateMultiply(2, -3)).toBe(-6);
		expect(calculateMultiply(0, 3)).toBe(0);
	});
});
