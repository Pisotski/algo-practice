// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],

  //   Identify which array is smaller (call it A) and the other is B.

  // Set your search boundaries: start with imin = 0 and imax = length of A.

  // While imin is less than or equal to imax:

  // Compute i as the middle of the current range in A.

  // Compute j as half length minus i (so the two partitions balance).

  // Check if i is too small: if so, move imin up.

  // Check if i is too large: if so, move imax down.

  // Otherwise, you've found the perfect split. Compute:

  // If total length is odd, the median is the max of the left side.

  // If total length is even, the median is the average of the max left and min right.

  // Return the median.
) {}
