import { describe, expect, test } from "vitest";
import areStringsClose from "./closeStrings";

describe("areStringsClose", () => {
  const cases = [
    {
      args: ["aabb", "bbcc"],
      result: false,
    },
    {
      args: ["aaab", "bbba"],
      result: true,
    },
    {
      args: ["", ""],
      result: true,
    },
    {
      args: ["ab", "aabb"],
      result: false,
    },
  ];
  cases.forEach(({ args, result }) => {
    test(`should return ${result} for (${args[0]}, ${args[1]})`, () => {
      expect(areStringsClose(args[0], args[1])).toBe(result);
    });
  });
});
