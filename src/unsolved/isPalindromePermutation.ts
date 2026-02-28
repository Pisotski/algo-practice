// Problem: Short Permutation in a Long String

// Given two strings, s1 (short) and s2 (long), determine whether any permutation of s1 is a substring of s2.
// 	•	A permutation is any rearrangement of the characters of a string.
// 	•	You only need to check if s2 contains at least one permutation of s1.

// ⸻

// Examples

// Example 1

// Input: s1 = “ab”, s2 = “eidbaooo”
// Output: true
// Explanation: s2 contains “ba”, which is a permutation of s1.

// Example 2

// Input: s1 = “ab”, s2 = “eidboaoo”
// Output: false
// Explanation: No substring of s2 matches a permutation of s1.

// Example 3

// Input: s1 = “abc”, s2 = “bbbca”
// Output: true
// Explanation: “bca” is a permutation of “abc” and is a substring of s2.

// Example 4

// Input: s1 = “a”, s2 = “a”
// Output: true
// Explanation: The single-character strings are equal.

export default function shortPermutationInALongString(
  short: string,
  long: string,
) {}
