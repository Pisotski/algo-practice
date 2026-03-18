// Given an array of positive integers and a number 'S,' find the length of the smallest contiguous
// subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists.

// Example 1:

// Input: arr = [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
// Example 2:

// Input: arr = [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
// Example 3:

// Input: arr = [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
// Constraints:

// 1 <= S <=
// 1 <= arr.length <= 105
// 1 <= arr[i] <= 104

// INPUT: array of numbers and number
// OUTPUT: number
// OBSERVATION: numbers are positive
// EDGE CASE: s is < 0, array.len is 0

// PLAN: sliding window. add sum = left to right increasing right by 1 until you hit s. after hitting s record subarray length, subtract left from sum. continue
export default function smallestArrayWithSumS(
  array: number[],
  s: number,
): number {
  // EDGE CASES: if s < 0 or array.length <= 0 return 0
  if (s <= 0 || !array.length) return 0;
  // variables:
  // left:
  // right:
  //
  // while right is within the window
  let left = 0;
  let right = 0;
  let currSum = 0;
  let result = Infinity;
  // add right to currSum
  while (right < array.length) {
    currSum += array[right];

    while (currSum >= s) {
      // see if result is greater than s
      // Math.min(result and current sum) <= i don't know when to record it. this is the trickiest part
      // continue moving left +1 and currSum - left until currSum is smaller than s or meets the right
      result = Math.min(result, right - left + 1);
      currSum -= array[left];
      left++;
    }
    right++;
  }

  return result === Infinity ? 0 : result;
}
