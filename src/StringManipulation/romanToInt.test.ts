import romanToInt from "./romanToInt";
import { describe, test, expect } from "vitest";

describe("romanToInt", () => {
  test("handles simple numerals", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
  });

  test("handles additive sequences", () => {
    expect(romanToInt("VIII")).toBe(8);
    expect(romanToInt("XVII")).toBe(17);
    expect(romanToInt("LVIII")).toBe(58);
  });

  test("handles subtractive notation", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });

  test("handles mixed cases", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
    expect(romanToInt("MMXXIV")).toBe(2024);
    expect(romanToInt("CDXLIV")).toBe(444);
  });

  test("handles single largest numeral", () => {
    expect(romanToInt("M")).toBe(1000);
  });
});
