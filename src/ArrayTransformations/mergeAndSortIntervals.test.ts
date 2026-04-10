import { describe, it, expect } from "vitest";
import mergeHighDefinitionIntervals from "./mergeAndSortIntervals";

describe("mergeHighDefinitionIntervals", () => {
  it("returns empty array when input is empty", () => {
    expect(mergeHighDefinitionIntervals([])).toEqual([]);
  });

  it("returns the same interval when only one interval is provided", () => {
    expect(mergeHighDefinitionIntervals([[1, 3]])).toEqual([[1, 3]]);
  });

  it("merges overlapping intervals", () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];

    expect(mergeHighDefinitionIntervals(intervals)).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it("handles intervals that are already non-overlapping", () => {
    const intervals = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    expect(mergeHighDefinitionIntervals(intervals)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it("merges fully contained intervals", () => {
    const intervals = [
      [1, 10],
      [2, 3],
      [4, 8],
    ];

    expect(mergeHighDefinitionIntervals(intervals)).toEqual([[1, 10]]);
  });

  it("sorts intervals before merging", () => {
    const intervals = [
      [8, 10],
      [1, 3],
      [2, 6],
    ];

    expect(mergeHighDefinitionIntervals(intervals)).toEqual([
      [1, 6],
      [8, 10],
    ]);
  });
});
