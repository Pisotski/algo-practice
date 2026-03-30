import { test, describe, expect } from "vitest";
import { findIOfMaxNum, pancakeSort } from "./pancakeSort";

describe("pancakeSort", () => {
  const cases: { input: number[]; output: number[] }[] = [
    {
      input: [3, 2, 4, 1],
      output: [4, 2, 4, 3],
    },
    {
      input: [1, 2, 3],
      output: [],
    },
  ];
  cases.forEach(({ input, output }) =>
    test(`steps to sort ${input} are ${output}`, () => {
      const arrCopy = [...input];
      const flips = pancakeSort(arrCopy);
      const sorted = [...input].sort((a, b) => a - b);

      expect(arrCopy).toEqual(sorted);
      expect(flips.length).toBeLessThanOrEqual(10 * input.length);
    }),
  );
});

describe("findIOfMaxNum", () => {
  const cases: { input: number[]; output: number }[] = [
    {
      input: [3, 2, 4, 1],
      output: 2,
    },
    {
      input: [1, 2, 3],
      output: 2,
    },
    {
      input: [-1, -2, -3],
      output: 0,
    },
  ];
  cases.forEach(({ input, output }) =>
    test(`Index of maximum number of ${input} array should be ${output}`, () => {
      expect(findIOfMaxNum(input)).toBe(output);
    }),
  );
});
