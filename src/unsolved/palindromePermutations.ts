// Given a string, determine whether it is a permutation of a palindrome.
// 	•	A palindrome is a word or phrase that reads the same forwards and backwards, ignoring spaces and letter case.
// 	•	A permutation is any rearrangement of the letters of the string.
// 	•	The input string may contain spaces and letters; you can ignore spaces and consider letters case-insensitively.

// A string is a permutation of a palindrome if the letters can be rearranged to form a palindrome. This means:
// 	•	For strings of even length, all characters must occur an even number of times.
// 	•	For strings of odd length, exactly one character can occur an odd number of times; all others must occur an even number of times.

// Example 1

// Input: “Tact Coa”
// Output: true
// Explanation: Can be rearranged as “taco cat”, “atco cta”, etc., which are palindromes.

// Example 2

// Input: “aabbcc”
// Output: true
// Explanation: All characters appear an even number of times; can be arranged as “abc cba”.

// Example 3

// Input: “aabbc”
// Output: true
// Explanation: Only one character (‘c’) occurs an odd number of times; can be arranged as “abcba”.

// Example 4

// Input: “abc”
// Output: false
// Explanation: More than one character occurs an odd number of times; cannot form a palindrome.

export default function isPalindromePermutation(str: string) {}
