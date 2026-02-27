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
   */
  let start = 0;
  let longest = 0;

  // create a map to track where was a char seen last
  const lastSeen = new Map();
  // track last duplicate within window
  let duplicateInd;

  // move end of sliding window
  for (let i = 0; i < s.length; i++) {
    // look for a char in map
    const seenChar = lastSeen.get(s[i]);

    // check is 2 chars are adjacent
    if (seenChar + 1 === i) {
      // if adjacent pair is already
      if (duplicateInd) start = duplicateInd;
      // update last ind of dup num
      duplicateInd = i;
    }

    // register char in map
    lastSeen.set(s[i], i);
    // calculate longest substring, add + 1 to compensate for 0-indexed arr
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}
