// Given two strings, determine if they are zero or one edit away from each other.

// An edit is defined as one of the following operations:
// 	1.	Insert a single character
// 	2.	Remove a single character
// 	3.	Replace a single character

// A string is considered one edit away from another if you can perform at most one of these operations to make the strings identical.

// Input: str1 = "pale", str2 = "bale"
// Output: true
// Explanation: You can replace 'p' with 'b' to make the strings equal.

// Input: str1 = "pale", str2 = "pales"
// Output: true
// Explanation: You can insert 's' at the end of "pale" to match "pales".

// Input: str1 = "pale", str2 = "ple"
// Output: true
// Explanation: You can remove 'a' from "pale" to match "ple".

// Input: str1 = "pale", str2 = "bake"
// Output: false
// Explanation: You would need to replace 'p'→'b' and 'l'→'k' (two edits), so it’s false.

// Input: str1 = "pale", str2 = "pale"
// Output: true
// Explanation: Zero edits needed.

export default function oneAway(str1: string, str2: string) {}
