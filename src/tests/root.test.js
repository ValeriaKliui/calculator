import { ROUNDING_PRECISION } from "@constants";
import { getError, getOperationResult } from "./setup";

describe("tests for root operation", () => {
	const calculateRoot = (...values) => getOperationResult("root", ...values);

	it("should handle wrong values", () => {
		const wrongValues = ["", null, true, "string", NaN, undefined, 0, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateRoot(wrongValue, wrongValue);

			expect(result).toBe(0);
		});
	});

	it("should throw error on infinity", () => {
		const result = calculateRoot(Infinity, Infinity);

		expect(getError()).toMatch(/Error:/);
		expect(result).toBe(0);
	});

	it("should throw error on square root of negative number", () => {
		const result = calculateRoot(-23, 2);

		expect(getError()).toMatch(/Error:/);

		expect(result).toBe(0);
	});

	it("should handle absence of arguments", () => {
		const withoutArgs = calculateRoot();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculateRoot(7);
		expect(withoutSecArg).toBeCloseTo(2.64575131106, ROUNDING_PRECISION);
	});

	test("should return correct square root for positive numbers", () => {
		expect(calculateRoot(4, 2)).toBeCloseTo(Math.sqrt(4), ROUNDING_PRECISION);
		expect(calculateRoot("9", 2)).toBeCloseTo(Math.sqrt(9), ROUNDING_PRECISION);
		expect(calculateRoot(16, "2")).toBeCloseTo(Math.sqrt(16), ROUNDING_PRECISION);
		expect(calculateRoot("25", "2")).toBeCloseTo(Math.sqrt(25), ROUNDING_PRECISION);
	});

	test("should return correct cube root", () => {
		expect(calculateRoot(8, 3)).toBeCloseTo(Math.cbrt(8), ROUNDING_PRECISION);
		expect(calculateRoot(27, 3)).toBeCloseTo(Math.cbrt(27), ROUNDING_PRECISION);
		expect(calculateRoot(64, 3)).toBeCloseTo(Math.cbrt(64), ROUNDING_PRECISION);
	});

	test("should handle negative bases correctly for odd exponents", () => {
		expect(calculateRoot(-8, 3)).toBeCloseTo(Math.cbrt(-8), ROUNDING_PRECISION);
		expect(calculateRoot(-27, 3)).toBeCloseTo(Math.cbrt(-27), ROUNDING_PRECISION);
		expect(calculateRoot(-64, 3)).toBeCloseTo(Math.cbrt(-64), ROUNDING_PRECISION);
	});

	test("should return 0 when base is 0", () => {
		expect(calculateRoot(0, 2)).toBe(0);
		expect(calculateRoot(0, 5)).toBe(0);
	});

	test("should return the base when exponent is 1", () => {
		expect(calculateRoot(5, 1)).toBe(5);
		expect(calculateRoot(100, 1)).toBe(100);
	});

	test("should return correct x^y root", () => {
		expect(calculateRoot(125, 5)).toBeCloseTo(2.6265278044, ROUNDING_PRECISION);
		expect(calculateRoot(8, -6)).toBeCloseTo(0.7071067811865475, ROUNDING_PRECISION);
	});

	test("should return approximate roots for non-perfect squares", () => {
		expect(calculateRoot(2, 2)).toBeCloseTo(Math.sqrt(2), ROUNDING_PRECISION);
		expect(calculateRoot(10, 2)).toBeCloseTo(Math.sqrt(10), ROUNDING_PRECISION);
		expect(calculateRoot(50, 2)).toBeCloseTo(Math.sqrt(50), ROUNDING_PRECISION);
	});
});
