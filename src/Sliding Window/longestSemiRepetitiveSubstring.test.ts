import { describe, it, expect } from "vitest";
import longestSemiRepetitiveSubstring from "./longestSemiRepetitiveSubstring";

describe("longestSemiRepetitiveSubstring", () => {
  it("should be defined", () => {
    expect(longestSemiRepetitiveSubstring).toBeDefined();
  });

  it("should return 0 for an empty string", () => {
    expect(longestSemiRepetitiveSubstring("")).toBe(0);
  });

  it("should return a number for non-empty strings", () => {
    expect(typeof longestSemiRepetitiveSubstring("12")).toBe("number");
    expect(longestSemiRepetitiveSubstring("12")).not.toBeNull();
  });

  it("should return the correct length for strings with at most one adjacent pair of identical digits", () => {
    const cases = [
      { input: "52233", expected: 4 },
      { input: "5494", expected: 4 },
      { input: "1111111", expected: 2 },
      { input: "123456", expected: 6 },
      { input: "112345", expected: 6 },
      { input: "1", expected: 1 },
      { input: "22", expected: 2 },
      { input: "121212", expected: 6 },
      { input: "12212", expected: 5 },
      { input: "122212", expected: 4 },
      { input: "3332211", expected: 3 },
      { input: "12333321", expected: 3 },
    ];

    for (const { input, expected } of cases) {
      expect(longestSemiRepetitiveSubstring(input)).toBe(expected);
    }
  });
});
