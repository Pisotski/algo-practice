import { describe, it, expect } from "vitest";
import { mergeTwoSortedArrays, mergeSort } from ".";

describe("mergeTwoSortedArrays", () => {
  const cases = [
    { arr1: [], arr2: [], expected: [] },
    { arr1: [], arr2: [1], expected: [1] },
    { arr1: [1], arr2: [], expected: [1] },

    { arr1: [0], arr2: [0], expected: [0, 0] },
    { arr1: [2], arr2: [1], expected: [1, 2] },

    { arr1: [1, 3], arr2: [2], expected: [1, 2, 3] },
    { arr1: [1, 3, 5], arr2: [2, 4], expected: [1, 2, 3, 4, 5] },
    { arr1: [1, 3], arr2: [2, 4, 6], expected: [1, 2, 3, 4, 6] },
    { arr1: [1, 3, 5], arr2: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6] },

    { arr1: [-5, -1, 3], arr2: [-2, 4], expected: [-5, -2, -1, 3, 4] },
    { arr1: [1, 1, 1], arr2: [1, 1], expected: [1, 1, 1, 1, 1] },

    {
      arr1: [1, 4, 7, 9],
      arr2: [2, 3, 5, 6, 8],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ];

  it.each(cases)(
    "arr1: $arr1 arr2: $arr2 -> expected: $expected",
    ({ arr1, arr2, expected }) => {
      expect(mergeTwoSortedArrays(arr1, arr2)).toEqual(expected);
    },
  );
});

describe("mergeSort", () => {
  const cases = [
    { input: [], expected: [] },
    { input: [1], expected: [1] },

    { input: [2, 1], expected: [1, 2] },
    { input: [3, 1, 2], expected: [1, 2, 3] },

    { input: [5, 3, 8, 4, 2], expected: [2, 3, 4, 5, 8] },
    { input: [9, 7, 5, 3, 1], expected: [1, 3, 5, 7, 9] },

    { input: [-3, -1, -2, 0], expected: [-3, -2, -1, 0] },
    { input: [1, 1, 1, 1], expected: [1, 1, 1, 1] },

    { input: [10, -5, 7, 3, 0, -2, 8], expected: [-5, -2, 0, 3, 7, 8, 10] },
  ];

  it.each(cases)(
    "input: $input -> expected: $expected",
    ({ input, expected }) => {
      expect(mergeSort(input)).toEqual(expected);
    },
  );
});
