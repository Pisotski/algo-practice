import { describe, it, expect } from "vitest";
import { maxProfit } from "./maxProfit";

describe("maxProfit", () => {
  it.each([
    {
      prices: [7, 1, 5, 3, 6, 4],
      expected: 5,
    },
    {
      prices: [7, 6, 4, 3, 1],
      expected: 0,
    },
    {
      prices: [1, 2],
      expected: 1,
    },
    {
      prices: [1],
      expected: 0,
    },
    {
      prices: [2, 5, 1, 3],
      expected: 3,
    },
  ])("prices=$prices -> $expected", ({ prices, expected }) => {
    expect(maxProfit(prices)).toBe(expected);
  });
});
