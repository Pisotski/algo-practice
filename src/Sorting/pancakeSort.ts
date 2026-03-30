/**

Given an array of integers arr, sort the array by performing a series of pancake flips.
In one pancake flip we do the following steps:
Choose an integer k where 1 <= k <= arr.length.
Reverse the sub-array arr[0...k-1] (0-indexed).
For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, 
we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3.
Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. 
Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.

Example 1:
Input: arr = [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: arr = [3, 2, 4, 1]
After 1st flip (k = 4): arr = [1, 4, 2, 3]
After 2nd flip (k = 2): arr = [4, 1, 2, 3]
After 3rd flip (k = 4): arr = [3, 2, 1, 4]
After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted.

Example 2:
Input: arr = [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.

*/
import reverseArray from "../ArrayTransformations/reverseArray";

export function findIOfMaxNum(arr: number[]): number {
  let maxNum = -Infinity;
  let maxNumIndex = 0;

  arr.forEach((el, i) => {
    const largerNum = Math.max(maxNum, el);
    if (largerNum > maxNum) {
      maxNum = largerNum;
      maxNumIndex = i;
    }
  });
  return maxNumIndex;
}

export function pancakeSort(arr: number[]): number[] {
  const flips: number[] = [];

  // works like bubble sort, find max number flip subarray so maxNum is on position 0,
  // then flip the whole array => max number is now in the right spot
  // do the same for second to last, third and so on

  // two thing to look at:
  // when max number is in the right spot => skip both steps
  // when largest number in on position 0 => skip step 1

  // position to look at, starts with last element, updates each time max number for subarray is in its spot
  // when position is 0, that means that all numbers are in place, and array is sorted
  let nextMaxPosition = arr.length - 1;

  while (nextMaxPosition > 0) {
    // lets assume i have maxNum function in place
    const maxNumI = findIOfMaxNum(arr.slice(0, nextMaxPosition + 1)); // <= should return index
    // if maxNum is in the wrong place and not 0
    // flip subarray
    if (maxNumI !== nextMaxPosition) {
      // flip small subarray if max number is not on index 0
      if (maxNumI > 0) {
        reverseArray(arr, maxNumI);
        flips.push(maxNumI + 1);
      }
      // flip large subarray, after largest num on index 0
      reverseArray(arr, nextMaxPosition);
      flips.push(nextMaxPosition + 1);
    }
    // move on to next maximum position
    nextMaxPosition--;
  }

  return flips;
}
