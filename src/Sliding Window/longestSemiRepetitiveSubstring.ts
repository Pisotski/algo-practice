// You are given a digit string s that consists of digits from 0 to 9.
// A string is called semi-repetitive if there is at most one adjacent pair of the same digit. For example, "0010", "002020", "0123", "2002", and "54944" are semi-repetitive while the following are not: "00101022" (adjacent same digit pairs are 00 and 22), and "1101234883" (adjacent same digit pairs are 11 and 88).
// Return the length of the longest semi-repetitive substring of s.

// Example 1:
// Input: s = "52233"
// Output: 4
// Explanation:
// The longest semi-repetitive substring is "5223". Picking the whole string "52233" has two adjacent same digit pairs 22 and 33, but at most one is allowed.

// Example 2:
// Input: s = "5494"
// Output: 4
// Explanation:
// s is a semi-repetitive string.

// Example 3:
// Input: s = "1111111"
// Output: 2
// Explanation:
// The longest semi-repetitive substring is "11". Picking the substring "111" has two adjacent same digit pairs, but at most one is allowed.

/**
 * INPUT: a digit string
 * OUTPUT: number
 */

export default function longestSemiRepetitiveSubstring(s: string) {
  // Clarifying questions:

  /**
   * EDGE case:
   * empty string => 0;
   *
   * SLIDING WINDOW:
   * Variables: start, end, isValid
   *
   * in a while loop keep track of start and end
   * update end + 1 each time
   * when digit next to the end is the same as the end, toggle isValid variable
   * when isValid is false and the end hits condition, move start
   */
  let start = 0;
  let end = 0;
  let isValid = true;
  let longest = 0;

  // i would have done more pseudocode before coding here, doing it how you're doing it now is easier to
  // get into a rabbit hole because you aren't sure where your solution is going
  // you can continue if you feel you know where your solution is going! if you don't, pseudocode first
  while (end < s.length - 1) {
    ///0 1 2 3 4 5 6 7
    // 5 2 2 3 3 4 5 5 end = 0, len = 5, condition if end reaches to the end of a string 0 < 4
    let currDigit = s[end]; // 5 2 2 3 3
    let nextDigit = s[end + 1]; // 2 2 3 3 4
    if (currDigit === nextDigit) {
      // false true false true
      if (!isValid) {
        // false false true
        // i can't proceed
        // first, Math.max longest saved substring and current substring length
        // second, move start
        longest = Math.max(longest, end - start + 1); // actual len of 0 to 3 is 4, +1 is getting lost somewhere. longest = 3;
        start++; // 1
      } else {
        // to indicate that i already have at least 1 pair, i'll flag is that there is
        isValid = false; // isValid = false
      }
    }
    end++; // 1 2 3 4
  }

  return longest;
}
