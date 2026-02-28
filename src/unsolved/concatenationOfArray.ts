// Problem: Concatenation of Array

// Given an integer array nums of length n, you are asked to create a new array ans of length 2n such that:

// • ans[i] = nums[i] for 0 ≤ i < n
// • ans[i + n] = nums[i] for 0 ≤ i < n

// In simple terms, you must return a new array that consists of the original array followed by the same array again.

// The result is essentially nums concatenated with itself.

// Example 1

// Input: nums = [1, 2, 1]
// Output: [1, 2, 1, 1, 2, 1]

// Explanation:
// The original array has length 3.
// The new array has length 6.
// The first half is the original array.
// The second half is the same array repeated.

// Example 2

// Input: nums = [1, 3, 2, 1]
// Output: [1, 3, 2, 1, 1, 3, 2, 1]

// Explanation:
// The array is simply appended to itself.

// Constraints

// 1 ≤ nums.length ≤ 1000
// 1 ≤ nums[i] ≤ 1000

export default function concatenationOfArray(nums: number[]) {}
