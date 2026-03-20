import { describe, test, expect } from "vitest";
import arraySortPow from "./arraySortPow";

describe("arraySortPow", () => {
  const cases = [
    {
      args: [-4, -1, 0, 3, 10],
      result: [0, 1, 9, 16, 100],
    },
    {
      args: [-7, -3, 2, 3, 11],
      result: [4, 9, 9, 49, 121],
    },
    {
      args: [-7, -3],
      result: [9, 49],
    },
    {
      args: [3, 7],
      result: [9, 49],
    },
    {
      args: [0],
      result: [0],
    },
    {
      args: [0, 0, 0],
      result: [0, 0, 0],
    },
    {
      args: [],
      result: [],
    },
  ];
  cases.forEach(({ args, result }) => {
    test(`squared array ${args} should be ${result}`, () => {
      expect(arraySortPow(args)).toEqual(result);
    });
  });
});
