import { describe, test, expect } from "vitest";
import reverseArray from "./reverseArray";

describe("reverseArray", () => {
  const cases: { args: number[]; result: number[] }[] = [
    {
      args: [1, 2, 3, 4, 5],
      result: [5, 4, 3, 2, 1],
    },
    {
      args: [10, 20, 30, 40],
      result: [40, 30, 20, 10],
    },
    {
      args: [7],
      result: [7],
    },
  ];
  cases.forEach(({ args, result }) => {
    test(`Reversed ${args[0]} array should be ${result}`, () => {
      expect(reverseArray(args)).toEqual(result);
    });
  });
});
