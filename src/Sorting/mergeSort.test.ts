import { describe, it, expect } from "vitest";
import { mergeTwoSortedArrays } from ".";

describe.only("mergeTwoSortedArrays", () => {
  const cases = [
    { arr1: [1, 3, 5], arr2: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6] },
    { arr1: [1, 3, 5], arr2: [2, 4], expected: [1, 2, 3, 4, 5] },
    { arr1: [1, 3], arr2: [2, 4, 6], expected: [1, 2, 3, 4, 5] },
  ];

  it.each(cases)(
    "input: $input -> expected: $expected",
    ({ arr1, arr2, expected }) => {
      expect(mergeTwoSortedArrays(arr1, arr2)).toEqual(expected);
    },
  );
});
