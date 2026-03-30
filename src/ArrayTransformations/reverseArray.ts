// Reverse an Array In-Place

// Given an array of integers `arr`, reverse the elements of the array **in-place** using **O(1) extra space** (constant space).

// You may NOT allocate a new array or use any built-in reverse functions.

// Example 1
// Input:  [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// Example 2:
// Input:  [10, 20, 30, 40]
// Output: [40, 30, 20, 10]

// Example 3:
// ```
// Input:  [7]
// Output: [7];

export default function reverseArray(arr: number[], k?: number): number[] {
  if (!arr.length) return arr;

  const lastElInd = k ?? arr.length - 1;

  for (let i = 0; i <= lastElInd / 2; i++) {
    [arr[i], arr[lastElInd - i]] = [arr[lastElInd - i], arr[i]];
  }
  return arr;
}
