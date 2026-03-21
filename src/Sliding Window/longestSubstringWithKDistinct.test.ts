import { describe, test, expect } from "vitest";
import longestSubstringWithKDistinct from "./longestSubstringWithNoMoreThanK";

describe.only("longestSubstringWithKDistinct", () => {
  const cases: { args: [string, number]; result: number }[] = [
    {
      args: ["araaci", 2],
      result: 4,
    },
    {
      args: ["araaci", 1],
      result: 2,
    },
    {
      args: ["cbbebi", 3],
      result: 5,
    },
    {
      args: ["ai", 1],
      result: 1,
    },
    {
      args: ["a", 1],
      result: 1,
    },
    {
      args: ["a", 0],
      result: 0,
    },
    {
      args: ["aaarci", 1],
      result: 3,
    },
    {
      args: ["arciaa", 1],
      result: 2,
    },
  ];
  cases.forEach(({ args, result }) => {
    test(`the longest substring of ${args[0]} with k ${args[1]} should be ${result}`, () => {
      expect(longestSubstringWithKDistinct(args[0], args[1])).toBe(result);
    });
  });
});
