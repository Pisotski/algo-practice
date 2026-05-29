// Problem — Maximum Nesting Depth of Parentheses
// Given a valid parentheses string (VPS) s, return the nesting depth of s.
// The nesting depth is the maximum number of nested parentheses.

// Example 1:
// Input:  s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:
// Input:  s = "(1)+((2))+(((3)))"
// Output: 3
// Explanation: Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:
// Input:  s = "()(())((()()))"
// Output: 3

// Constraints:
// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'
// It is guaranteed that parentheses expression s is a VPS

// Input: string

// Output: number

// Edge cases: '', '()', '6'

// Approach / Pseudo code:
// i think it's a stack problem, and i should just implement classic stack approach and Math.max str.len after adding opening parenthesis
// Mehedi: you can solve either way I believe, not really. look here: (()(()))). with two pointers it gets unnecesarily complicated.

export function maxDepth(s: string): number {
  // if no s.len return 0
  // init stack

  // create a map

  // check if char isParen
  // check if stack[last] is str[i]'s pair
  // stack.pop if it is
  // add str[i] to stack
  // record math.max result, stack

  let max = 0;
  let currDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currDepth += 1;
    }
    if (s[i] === ")") {
      currDepth -= 1;
    }
    max = Math.max(currDepth, max);
  }
  return max;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("()(())((()()))")); // 3
