// Given an MxN matrix, write a function such that if an element in the matrix is 0, its entire row and column are set to 0.

// Assumptions
// 	•	All items in the matrix are numbers.
// 	•	The function should modify the matrix in-place if possible.

// Examples

// Example 1

// Input:
// matrix =
// [[1, 2, 3],
// [4, 0, 6],
// [7, 8, 9]]

// Output:
// [[1, 0, 3],
// [0, 0, 0],
// [7, 0, 9]]

// Explanation: The 0 at (1,1) sets its entire row and column to 0.

// Example 2

// Input:
// matrix =
// [[0, 1],
// [2, 3]]

// Output:
// [[0, 0],
// [0, 3]]

// Explanation: The 0 at (0,0) sets the first row and first column to 0.

// Example 3

// Input:
// matrix =
// [[1, 2],
// [3, 4]]

// Output:
// [[1, 2],
// [3, 4]]

// Explanation: No zeros, matrix stays the same.

export default function zeroMatrix(matrix: number[][]): void {}
