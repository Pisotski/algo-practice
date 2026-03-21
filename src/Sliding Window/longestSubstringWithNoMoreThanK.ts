/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Example 1:
Input: String="araaci", K=2  
Output: 4  
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1  
Output: 2  
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
Input: String="cbbebi", K=3  
Output: 5  
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
Constraints:

Example 4:
Input: String="ai", K=1  
Output: 1  
Explanation: The longest substring with no more than '1' distinct characters is "a" or "i".

Example 5:
Example:
Input: String="a", K=1
Output: 1
Explanation: If string.length equals K, return 

Example 6:
Input: String="a", K=0
Output: 0
Explanation: K = 0, return 0

Example 7:
Input: String="aaarci", K=1  
Output: 2  
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 8:
Input: String="arciaa", K=1  
Output: 2  
Explanation: The longest substring with no more than '1' distinct characters is "aa".

1 <= str.length <= 5 * 104
0 <= K <= 50

*/

// to make my life easier i'm gonna assume that all char are lowercase english letters
export default function longestSubstringWithKDistinct(
  string: string,
  k: number,
): number {
  let result = 0;
  // CLARIFYING QUESTIONS:
  // is string aab with k=3 will be 0? no it will be 3. aab has only 2 distinct chars a and b

  // EDGE CASES: empty string, spaces and casing.
  const len = string.length;
  if (!len || k <= 0) return result;
  // by the description of this problem k is always valid

  // create a hashmap. hashmap with characters  (optimization: and indexes to move to while iterating)
  // if character present in the hashmap. record how many letter does hashmap have
  // if it is. "unload" all chars by subtracting 1 in the hashmap, before that character
  // 2 while loops

  const hMap: Record<string, number> = {};
  let left = 0;
  let right = 0;
  let size = 0;
  // while right < string.length(len)

  while (right < len) {
    // 0 < 6,
    // add char to map. like:
    // a: 1
    const charR = string[right];
    if (hMap.hasOwnProperty(charR)) {
      hMap[charR] += 1;
    } else {
      hMap[charR] = 1;
      size++;
    }

    // if size exceeds the limit of k
    // while size >= k
    while (size > k) {
      // move left, decrease or erase every character on the left hits
      const charL = string[left];
      hMap[charL] -= 1;
      if (hMap[charL] === 0) {
        Reflect.deleteProperty(hMap, charL);
        size--;
      }
      left++;
    }
    right++;
    result = Math.max(result, right - left);
  }
  // this solution is optimal, since i have to revisit each character twice
  // to keep track of size.

  // i also liked my approach not to force recomputing Object.keys().length
  // and implemented it manually
  return result;
}
