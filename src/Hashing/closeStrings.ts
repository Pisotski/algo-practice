// # Two strings are considered close if you can attain one from the other using the following operations:

// # Operation 1: Swap any two existing characters.
// # For example, abcde -> aecdb
// # Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// # For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// # You can use the operations on either string as many times as necessary.

// # Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// # Example 1:

// # Input: word1 = "abc", word2 = "bca"
// # Output: true
// # Explanation: You can attain word2 from word1 in 2 operations.
// # Apply Operation 1: "abc" -> "acb"
// # Apply Operation 1: "acb" -> "bca"
// # Example 2:

// # Input: word1 = "a", word2 = "aa"
// # Output: false
// # Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// # Example 3:

// # Input: word1 = "cabbba", word2 = "abbccc"
// # Output: true
// # Explanation: You can attain word2 from word1 in 3 operations.
// # Apply Operation 1: "cabbba" -> "caabbb"
// # Apply Operation 2: "caabbb" -> "baaccc"
// # Apply Operation 2: "baaccc" -> "abbccc"

// Compare len of 2 strings
// Create a object from string 1
// Create a object from string 2

// count frequency of each letter
// check if keys are the same

// check if values frequencies are sorted are the same as well

// or str are lower case
export default function areStringsClose(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Map: Record<string, number> = {};
  const str2Map: Record<string, number> = {};

  for (const c of str1) {
    str1Map[c] = (str1Map[c] ?? 0) + 1;
  }

  for (const c of str2) {
    // if char is not in str1, return false right away
    if (str1Map[c] === undefined) return false;
    str2Map[c] = (str2Map[c] ?? 0) + 1;
  }

  const sortedValues1 = Object.values(str1Map).sort((a, b) => a - b);
  const sortedValues2 = Object.values(str2Map).sort((a, b) => a - b);

  // deeply compare two arrays
  return sortedValues1.every((v, i) => v === sortedValues2[i]);
}
// any ways you can think of to optimize this?

// checking length = constant operation
// adding to maps = 2 linears
// sorting = 2 n log ns <= i'd optimize something here. there are some ways to make in linear
// array.every = linears

// complexity so far = n log n. Improved complexity = linear

// LLM optimized answer:
// function areStringsClose(str1: string, str2: string): boolean {
//   if (str1.length !== str2.length) return false;

//   const freq1: Record<string, number> = {};
//   const freq2: Record<string, number> = {};

//   for (const c of str1) {
//     freq1[c] = (freq1[c] ?? 0) + 1;
//   }

//   for (const c of str2) {
//     if (freq1[c] === undefined) return false; // same char set check
//     freq2[c] = (freq2[c] ?? 0) + 1;
//   }

//   // frequency of frequencies
//   const count1: Record<number, number> = {};
//   const count2: Record<number, number> = {};

//   for (const key in freq1) {
//     const f = freq1[key];
//     count1[f] = (count1[f] ?? 0) + 1;
//   }

//   for (const key in freq2) {
//     const f = freq2[key];
//     count2[f] = (count2[f] ?? 0) + 1;
//   }

//   // compare frequency distributions
//   for (const f in count1) {
//     if (count1[f] !== count2[f]) return false;
//   }

//   return true;
// }
