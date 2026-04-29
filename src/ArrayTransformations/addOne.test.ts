import addOne from "./addOne";
import { describe, test, expect } from "vitest";

describe("addOne", () => {
  test("increments simple number", () => {
    expect(addOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test("handles carry at the end", () => {
    expect(addOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  test("handles multiple carries", () => {
    expect(addOne([1, 9, 9])).toEqual([2, 0, 0]);
  });

  test("handles all nines", () => {
    expect(addOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  test("handles single digit", () => {
    expect(addOne([5])).toEqual([6]);
  });

  test("handles single nine", () => {
    expect(addOne([9])).toEqual([1, 0]);
  });

  test("handles zero", () => {
    expect(addOne([0])).toEqual([1]);
  });
});
