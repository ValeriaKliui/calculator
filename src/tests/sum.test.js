import { ROUNDING_PRECISION } from "@constants";

import { getError, getOperationResult } from "./setup";

describe("tests for sum operation", () => {
	const calculateSum = (...values) => getOperationResult("sum", ...values);

	it("should handle wrong values", () => {
		const wrongValues = ["", null, true, "string", NaN, undefined, 0, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateSum(wrongValue, wrongValue);
			expect(result).toBe(0);
		});
	});

	it("should throw error on infinity", () => {
		const result = calculateSum(Infinity, Infinity);

		expect(getError()).toMatch(/Error:/);

		expect(result).toBe(0);
	});

	it("should handle absence of arguments", () => {
		const withoutArgs = calculateSum();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculateSum(7);
		expect(withoutSecArg).toBe(7);
	});

	it("should handle decimal numbers", () => {
		expect(calculateSum(0.12313132, 0.3737373737)).toBeCloseTo(0.12313132 + 0.3737373737, ROUNDING_PRECISION);
		expect(calculateSum(0.21312322)).toBeCloseTo(0.21312322, ROUNDING_PRECISION);
		expect(calculateSum(0.1, 0.2)).toBeCloseTo(0.1 + 0.2, ROUNDING_PRECISION);
		expect(calculateSum(Number("1.0000000000000001"), 2)).toBeCloseTo(
			Number("1.0000000000000001") + 2,
			ROUNDING_PRECISION,
		);
	});

	it("should return correct sum", () => {
		expect(calculateSum(10, 20)).toBe(30);
		expect(calculateSum("10", "20")).toBe(30);
		expect(calculateSum(0.5, 1.5)).toBe(2);
		expect(calculateSum(-2, -3)).toBe(-5);
		expect(calculateSum(2, -3)).toBe(-1);
	});
});
