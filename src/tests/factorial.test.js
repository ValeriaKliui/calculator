import { getError, getOperationResult } from "./setup";

describe("tests for factorial operation", () => {
	const calculateFactorial = (...values) => getOperationResult("factorial", ...values);

	it("should handle wrong values", () => {
		const wrongValues = ["", null, true, "string", NaN, undefined, []];

		wrongValues.forEach((wrongValue) => {
			const result = calculateFactorial(wrongValue);

			expect(result).toBe(0);
		});
	});

	it("should throw error on infinity", () => {
		const result = calculateFactorial(Infinity);
		expect(getError()).toMatch(/Error:/);

		expect(result).toBe(0);
	});

	it("should throw error for negative numbers", () => {
		const resultNegative = calculateFactorial(-10);
		expect(getError()).toMatch(/Error:/);

		expect(resultNegative).toBe(0);
	});

	it("should throw error for numbers > 170", () => {
		const resultHuge = calculateFactorial(2500);
		expect(getError()).toMatch(/Error:/);

		expect(resultHuge).toBe(0);
	});

	it("should throw error on decimal numbers ", () => {
		const result = calculateFactorial(0.234242424);

		expect(getError()).toMatch(/Error:/);

		expect(result).toBe(0);
	});

	it("should handle absence of arguments", () => {
		const withoutArgs = calculateFactorial();
		expect(withoutArgs).toBe(0);
	});

	it("should return correct value", () => {
		expect(calculateFactorial(0)).toBe(1);
		expect(calculateFactorial(1)).toBe(1);
		expect(calculateFactorial("5")).toBe(120);
		expect(calculateFactorial(4)).toBe(24);
	});
});
