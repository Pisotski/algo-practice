// Given an array of intervals [startTime, endTime], merge all overlapping intervals
// and return a sorted array of non-overlapping intervals.

// intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output [[1, 6], [8, 10], [15, 18]]

// Explanation
// - Step 1: Sort intervals by start time (already sorted).
// - Step 2: Initialize merged list with first interval [1,3].
// - Step 3: Compare [2,6] with last merged [1,3]. They overlap (2 ≤ 3), so merge into [1,6].
// - Step 4: Compare [8,10] with last merged [1,6]. No overlap (8 > 6), append [8,10].

export default function mergeHighDefinitionIntervals(
  intervals: number[][],
): number[][] {
  // Write your code here
  if (!intervals.length) return [];
  // i will use .sort method targeting first element in tuple

  intervals.sort((a, b) => a[0] - b[0]);
  // create a variable mergedList with intervals[0]
  const mergedList = [intervals[0]];
  // iterate through intervals
  for (let i = 1; i < intervals.length; i++) {
    // compare the second element of the last element from mergedList
    const current = intervals[i];
    const lastMerged = mergedList[mergedList.length - 1];

    // this function has 3 conditions to cover
    // if interval is out of bounds completely
    // if interval is in bounds completely
    // of if interval end overflows.
    // last 2 are practically the same. no need to perform any extra operation, just double check which one is greater, push nothing
    if (current[0] > lastMerged[1]) {
      mergedList.push(current);
    } else {
      // Otherwise, they overlap - merge them
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    }
  }
  // return mergedList

  return mergedList;
}
