// Given a string path representing a valid absolute Unix-style file path, return the simplified canonical path.

// A canonical path:
// 	•	Starts with a single /
// 	•	Has directories separated by a single /
// 	•	Does not end with / (unless it is the root /)
// 	•	Does not contain:
// 	•	. (current directory)
// 	•	.. (parent directory)
// 	•	Multiple consecutive slashes //

// •	1 <= path.length <= 3000
// •	Path contains:
// •	letters
// •	digits
// •	.
// •	/
// •	_
// •	Path is always an absolute path (starts with /)

// Input:  "/home/"
// Output: "/home"

// Input:  "/../"
// Output: "/"

// Input:  "/home//foo/"
// Output: "/home/foo"

// Input:  "/a/./b/../../c/"
// Output: "/c"

// Input: "/.../a/../b/c/../d/./"
// Output: "/.../b/d"

export default function simplifyPath(path: string) {}
