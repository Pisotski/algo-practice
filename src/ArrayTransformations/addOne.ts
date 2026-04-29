/**
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */

/**
 * Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 */

/**
 * Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
 */

/**
 * Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 */

/*
INPUT: array of integers
OUTPUT: array of integers
PLAN:
try adding one to the very last number of the array
if its 9, change it to 0 and pass 1 to previous  digit and so on
if the very first number is also 9, shift array and add 1 as 0est index item
EDGE CASES:
[] => []
*/

export default function plusOne(largeInt: number[]) {
  // passing 1 to prev algo
  if (!largeInt.length) return [];
  // declare current as largeInt length - 1
  // add 1 to current. if its 9, move current to the left by one
  // if current becomes a negative number (-1) it means that the we're out of bounds
  // shift array and add 1 to the beginning
  // 99

  let currentLast = largeInt.length - 1; // 1

  while (currentLast >= 0) {
    const currNum = largeInt[currentLast];

    if (currNum !== 9) {
      largeInt[currentLast] += 1;
      return largeInt;
    }

    largeInt[currentLast] = 0;
    currentLast -= 1;
    if (currentLast < 0) largeInt.unshift(1);
  }

  return largeInt;
}

console.log(plusOne([9, 9]));
console.log(plusOne([3, 2]));
console.log(plusOne([9, 8, 9, 9]));
// node vlad-04-13.js
