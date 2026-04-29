// Problem — Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol    Value
// I           1
// V           5
// X           10
// L           50
// C           100
// D           500
// M           1000
//
// Roman numerals are usually written largest to smallest from left to right.
// However, subtraction is used in six cases:
// I before V (5) and X (10) makes 4 and 9
// X before L (50) and C (100) makes 40 and 90
// C before D (500) and M (1000) makes 400 and 900
//
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input:  s = "III"
// Output: 3
// Explanation: III = 3

// Example 2:
// Input:  s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3

// Example 3:
// Input:  s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90, IV = 4

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters I, V, X, L, C, D, M
// It is guaranteed that s is a valid roman numeral in the range [1, 3999]

// Input: string

// Output: number

// Edge cases: empty string => ''

// Approach / Pseudo code:
// there are two ways to iterate. starting from the tail and starting from the tail
// STARTING from head.
// look at current nubmer.
// if next number is greater. consider it as compund number.
// meaning that it takes two letters to make one number.
// for compound number letter should not be added, but one should be subtracted from the other
// iv = 4 (1 < 5 therefore 5 - 1 = 4)
// cm = 900 (100 < 1000 therefore 1000 - 100 = 900)
// if next letter is smaller and current number is not compound add
// vi = 4 (5 > 1 therefore 5 + 1 = 6)
// mc = 900 (1000 > 100 therefore 1000 + 100 = 1100)

// Mehedi: we don't necessarily need to consider compound number I guess
// viii = 5+1+1+1 = 8, so if we can iterate the digits and then either add or subtract

// Look at every second number. (i = 1; i = i + 2);
// make sure it exists
// if not add map[str[i - 1]]

// if both numbers exists
// compare them and push add it to sum
// if prev is smaller then curr: subtract
// otherwise: add

// xlix = 49
// prev 10 is smaller then curr 50 subtract

// after thinking a little bit. with restrictions like that
// we're only dealing with maximum number of 9999, there is no way to move to 10.000
// knowing that every input is a valid number, is should just add or subtract the next number
// xiv (14): 10 - 1 + 5 === 10 + 5 - 1;
// subtract if next number is smaller, add if larger.
export default function romanToInt(s: string) {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum: number = 0;
  for (let i = 0; i < s.length; i++) {
    const currNum = map[s[i]];
    const nextNum = map[s[i + 1]] ?? 0;
    if (currNum < nextNum) {
      sum -= currNum;
    } else {
      sum += currNum;
    }
  }
  return sum;
}

console.log(romanToInt("I")); // 1
console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
