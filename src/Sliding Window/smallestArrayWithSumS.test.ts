import { describe, test, expect } from "vitest";
import smallestArrayWithSumS from "./smallestArrayWithSumS";

describe("smallestArrayWithSumS", () => {
  const cases: { args: [number[], number]; result: number }[] = [
    { args: [[2, 1, 5, 2, 3, 2], 7], result: 2 },
    { args: [[2, 1, 5, 2, 8], 7], result: 1 },
    { args: [[3, 4, 1, 1, 6], 8], result: 3 },
    { args: [[], 0], result: 0 },
    { args: [[1], -1], result: 0 },
  ];
  cases.forEach(({ args, result }) => {
    test(`The smallest length of contiguous subarray in ${args[0]} for sum ${args[1]} should be ${result}`, () => {
      expect(smallestArrayWithSumS(args[0], args[1])).toBe(result);
    });
  });
});
