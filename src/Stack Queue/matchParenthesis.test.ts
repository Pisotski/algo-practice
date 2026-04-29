import { describe, it, expect } from "vitest";
import isValid from "./matchParenthesis";

describe("longestSemiRepetitiveSubstring", () => {
  it("should be defined", () => {
    expect(isValid).toBeDefined();
  });

  it("should return 0 for an empty string", () => {
    expect(isValid("")).toBeTruthy();
  });

  const cases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([])", expected: true },
    { input: "([)]", expected: false },
  ];

  it.each(cases)(
    "input: $input -> expected: $expected",
    ({ input, expected }) => {
      expect(isValid(input)).toBe(expected);
    },
  );
});
