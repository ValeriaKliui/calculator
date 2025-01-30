import { ROUNDING_PRECISION } from '../constants';
import { getOperationResult } from './setup';

describe('tests for root operation', () => {
    const calculateRoot = (...values) =>
        getOperationResult('root', ...values);

    it('should handle wrong values', () => {
        const wrongValues = ['', null, true, 'string', NaN,undefined, 0, []];

        wrongValues.forEach((wrongValue) => {
            const result = calculateRoot(wrongValue, wrongValue);

            expect(result).toBe(0);
        });
    });

    it('should throw error on infinity', () => {
        const result = calculateRoot(Infinity, Infinity);

        expect(global.alert).toHaveBeenCalledWith(
            expect.stringMatching(/Error:/),
        );
        expect(result).toBe(0);
    });

    it('should handle absence of arguments', () => {
        const withoutArgs = calculateRoot();
        expect(withoutArgs).toBe(0);

        const withoutSecArg = calculateRoot(7);
        expect(withoutSecArg).toBeCloseTo(2.64575131106, ROUNDING_PRECISION);
    });

    // test("should return correct square root for positive numbers", () => {
    //     expect(calculateRoot(4, 2)).toBeCloseTo(2, ROUNDING_PRECISION);
    //     expect(calculateRoot('9', 2)).toBeCloseTo(3,ROUNDING_PRECISION);
    //     expect(calculateRoot(16, '2')).toBeCloseTo(4,ROUNDING_PRECISION);
    //     expect(calculateRoot('25', '2')).toBeCloseTo(5,ROUNDING_PRECISION);
    //   });

    //   test("should return correct cube root", () => {
    //     expect(calculateRoot(8, 3)).toBeCloseTo(2,ROUNDING_PRECISION);
    //     expect(calculateRoot(27, 3)).toBeCloseTo(3,ROUNDING_PRECISION);
    //     expect(calculateRoot(64, 3)).toBeCloseTo(4,ROUNDING_PRECISION);
    //   });
    
    //   test("should handle negative bases correctly for odd exponents", () => {
    //     expect(calculateRoot(-8, 3)).toBeCloseTo(-2,ROUNDING_PRECISION);
    //     expect(calculateRoot(-27, 3)).toBeCloseTo(-3,ROUNDING_PRECISION);
    //     expect(calculateRoot(-64, 3)).toBeCloseTo(-4,ROUNDING_PRECISION);
    //   });

    // it('should handle decimal numbers', () => {
    //     const testVars = [
    //         {
    //             numbers: [0.12313132, 0.3737373737],
    //             output: 0.12313132 * 0.3737373737,
    //         },
    //         {
    //             numbers: [0.21312322, 0.2342342424],
    //             output: 0.21312322 * 0.2342342424,
    //         },
    //         { numbers: [0.1, 0.2], output: 0.1 * 0.2 },
    //     ];

    //     testVars.forEach(({ numbers, output }) => {
    //         const result = calculateRoot(...numbers);

    //         expect(result).toBeCloseTo(output, ROUNDING_PRECISION);
    //     });
    // });

    // it('should return correct value', () => {
    //     expect(calculateRoot(10, 20)).toBe(200);
    //     expect(calculateRoot('10', '20')).toBe(200);
    //     expect(calculateRoot(0.5, 1.5)).toBe(0.75);
    //     expect(calculateRoot(-2, -3)).toBe(6);
    //     expect(calculateRoot(2, -3)).toBe(-6);
    //     expect(calculateRoot(0, 3)).toBe(0);
    // });
});
