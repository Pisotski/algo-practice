import { maxDepth } from "./maxDepth";
import { describe, it, expect } from "vitest";

describe("Maximum Nesting Depth of Parentheses", () =>
  it.each([
    { str: "(1+(2*3)+((8)/4))+1", expected: 3 },
    { str: "()(())", expected: 2 },
    { str: "(1)+((2))+(((3)))", expected: 3 },
    { str: "()(())((()()))", expected: 3 },
    { str: "", expected: 0 },
  ])("name", ({ str, expected }) => {
    expect(maxDepth(str)).toBe(expected);
  }));
