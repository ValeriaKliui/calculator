import { getOperationResult } from './setup';

describe('tests for power operation', () => {
	const calculatePower = (...values) =>
		getOperationResult('power', ...values);

	it('should handle wrong values', () => {
		const wrongValues = ['', null, true, 'string', NaN, undefined, 0, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculatePower(wrongValue, wrongValue);

			expect(result).toBe(0);
		});
	});

	it('should throw error on infinity', () => {
		const result = calculatePower(Infinity, Infinity);

		expect(global.alert).toHaveBeenCalledWith(
			expect.stringMatching(/Error:/),
		);
		expect(result).toBe(0);
	});

	it('should handle absence of arguments', () => {
		const withoutArgs = calculatePower();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculatePower(7);
		expect(withoutSecArg).toBe(49);
	});

	test('should handle zero exponent', () => {
		expect(calculatePower(3, 0)).toBe(1);
		expect(calculatePower(10, 0)).toBe(1);
	});

	test('should handle decimals', () => {
		expect(calculatePower(3, 0)).toBe(1);
		expect(calculatePower(10, 0)).toBe(1);
	});

	it('should return correct powered value', () => {
		expect(calculatePower(2, 3)).toBe(Math.pow(2, 3));
		expect(calculatePower(5, 4)).toBe(Math.pow(5, 4));
		expect(calculatePower(2, -2)).toBe(Math.pow(2, -2));
		expect(calculatePower(5, -3)).toBe(Math.pow(5, -3));
	});

	it('should handle 10^x', () => {
		expect(calculatePower(10, 38)).toBe(Math.pow(10, 38));
		expect(calculatePower(10, -2)).toBe(Math.pow(10, -2));
	});
});
