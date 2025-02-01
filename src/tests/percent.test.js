import { getError, getOperationResult } from "./setup";

describe("tests for percent operation", () => {
	const calculatePercent = (...values) => getOperationResult("percent", ...values);

	it("should handle wrong values", () => {
		const wrongValues = ["", null, true, "string", NaN, undefined, 0, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculatePercent(wrongValue);

			expect(result).toBe(0);
		});
	});

	it("should throw error on infinity", () => {
		const result = calculatePercent(Infinity, Infinity);
		expect(getError()).toMatch(/Error:/);
		expect(result).toBe(0);
	});

	it("should handle absence of arguments", () => {
		const withoutArgs = calculatePercent();
		expect(withoutArgs).toBe(0);

		const withoutSecArg = calculatePercent(7);
		expect(withoutSecArg).toBe(0.07);
	});

	it("should return correct value for one number", () => {
		expect(calculatePercent(20)).toBe(0.2);
		expect(calculatePercent("10")).toBe(0.1);
		expect(calculatePercent(0.5)).toBe(0.005);
		expect(calculatePercent(-2)).toBe(-0.02);
	});
	it("should return correct value for expression", () => {
		expect(calculatePercent(32, 26)).toBe(8.32);
		expect(calculatePercent(20, 5)).toBe(1);
		expect(calculatePercent(100, 5)).toBe(5);
		expect(calculatePercent(20, 500)).toBe(100);
	});
});
