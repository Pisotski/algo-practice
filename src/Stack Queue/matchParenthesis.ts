// Problem — Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input:  s = "()"
// Output: true

// Example 2:
// Input:  s = "()[]{}"
// Output: true

// Example 3:
// Input:  s = "(]"
// Output: false

// Example 4:
// Input:  s = "([])"
// Output: true

// Example 5:
// Input:  s = "([)]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

// Input: string

// Output: boolean

// Edge cases: empty string

// Approach / Pseudo code: have a map or corresponding parenthesis. add each character to stack. when hitting openning bracket: check is next is it's pair. if stack end up empty - the input is valid
// minimal time - linear, space - linear
// Mehedi: if we consider stack then it must hold total characters of the string in worst case, so O(n). gotcha

export default function isValid(s: string) {
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char]) {
      // closing bracket: check if the last item in stack matches the corresponding opening bracket
      if (!stack.length || stack[stack.length - 1] !== map[char]) {
        return false;
      }

      stack.pop();
    } else {
      // opening bracket
      stack.push(char);
    }
  }

  return !stack.length;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
