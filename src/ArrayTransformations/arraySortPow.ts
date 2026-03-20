// Given a sorted array of integers in non-decreasing order (the array may include negative numbers), return a new array containing the squares of each number, also sorted in non-decreasing order.

// Although the input array is already sorted, squaring negative numbers may disrupt the order. Therefore, the result must be re-sorted after squaring.

// Example 1

// Input: [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]

// Explanation:
// Squaring each element gives [16, 1, 0, 9, 100].
// After sorting, the result becomes [0, 1, 9, 16, 100].

// Example 2

// Input: [-7, -3, 2, 3, 11]
// Output: [4, 9, 9, 49, 121]

// Explanation:
// Squaring gives [49, 9, 4, 9, 121].
// After sorting, the result becomes [4, 9, 9, 49, 121].

// Constraints

// • 1 ≤ arr.length ≤ 10⁴
// • -10⁴ ≤ arr[i] ≤ 10⁴
// • The input array is sorted in non-decreasing order

// INPUT: array of mixed integers
// OUTPUT: array of positive integers
// EDGE CASE: repetitive numbers, empty array

// negative number to the power of 2 is positive.
// since i inevitably have to touch every element, the minimum time complexity will be linear
// an array is sorted, so i have to find where negative numbers end and start looking left and right moving one step accordingly

export default function arraySortPow(nums: number[]): number[] {
  const result: number[] = [];

  if (!nums.length) return result;
  // find the breakpoint where negative numbers turn positive.

  let left = -Infinity;
  let right = Infinity;
  const lastI = nums.length - 1;

  if (nums[0] >= 0) {
    right = 0;
  } else if (nums[lastI] <= 0) {
    left = nums.length - 1;
  } else {
    for (let i = 0; i <= lastI; i++) {
      // ZEROS ARE TRICKY. see where zeros should go
      // while loop is potentially cleaner
      if (nums[i] <= 0 && nums[i + 1] >= 0) {
        left = i;
        right = i + 1;
        break;
      }
    }
  }
  console.log("LEFT RIGHT");
  console.log(nums);
  console.log(left, right);
  // left is the last negative element, right is the first positive number

  // while left pointer is larger than 0 and right pointer smaller the nums.len. [-1,2]
  while (left >= 0 || right < nums.length) {
    // if left is out of bounds, record square right, right +1
    // if (left > -1) {
    //   result.push(Math.pow(right, 2));
    //   right++;
    //   continue;
    // }
    // if (right > lastI) {
    //   // if right, record square left and left -1
    //   result.push(Math.pow(left, 2));
    //   left--;
    //   continue;
    // }
    if (left < 0 || Math.abs(nums[left]) > Math.abs(nums[right])) {
      const square = Math.pow(nums[right], 2);
      result.push(square);
      console.log(
        `left ${nums[left]} square is larger than right or doesn't exist ${nums[right]} square, right goes up`,
      );
      right++;
    } else {
      const square = Math.pow(nums[left], 2);
      console.log(
        `left ${nums[left]} square is smaller than right ${nums[right]} square or right doesn't exist, left goes down`,
      );

      result.push(square);
      left--;
    }
    console.log(`NEW RESULT`);
    console.log(result);
    console.log(`${left} <<<=== NEW LEFT \n ${right} <<<=== NEW RIGHT`);
  }
  // compare math.abs of left and right
  // record smaller number. is smaller is left decrement left, otherwise increment right
  return result;
}
