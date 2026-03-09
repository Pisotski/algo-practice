// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// INPUT: string, string
// OUTPUT: boolean
// PLAN:
// BRUTE FORCE exponential:
// there are 2 operation
// so we need to repeat those 2 operation for every character
// if after any given operation str1 === str2 return true, otherwise false
// EDGE CASE: either string len is 0. or string1.len !== string2.len

function areStringsClose(str1: string, str2: string) {
  // CLARIFYING QUESTIONS: none yet.
  // EXAMPLE:
  // aa, bb => false
  // aba, bab => swap all b's to a's and b's to a's <= super confusing. you have to keep track each original character after swapping. do not alter original string
  // ella, bella => false
  // ella, aeel => true

  // There are 2 problems in 1
  // Problem 1 => characters swapping positions
  // Problem 2 => characters swapping values
  // i would solve each one individually and then use both functions as helpers

  // I have a function swapPositions(pos1, pos2) and a function swapValues(char1, char2)
  // for each character, apply following:
  // resultSoFar1 => result of swapping ch
  return false;
}
