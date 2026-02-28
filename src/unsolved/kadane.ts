// Kadane’s Algorithm is a dynamic programming approach to find the maximum sum contiguous subarray of a given array.

// Key points:
// 	•	Iterates through the array once.
// 	•	Maintains two variables:
// 	•	currentMax: maximum subarray sum ending at the current element
// 	•	globalMax: maximum sum found so far
// 	•	At each element, either:
// 	•	Start a new subarray at that element (currentMax = arr[i])
// 	•	Or extend the existing subarray (currentMax += arr[i])
// 	•	Updates globalMax if currentMax is larger.
// 	•	Returns the globalMax as the sum of the maximum subarray.
// 	•	Can be extended to also track start and end indices of the subarray.

export interface KadaneResult {
  maxSum: number;
  start?: number;
  end?: number;
}

export const kadane = (array: number[]): KadaneResult => {
  let currentMax = 0;
  let globalMax = -Infinity;
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < array.length; i++) {
    // TODO: implement the logic to update currentMax, globalMax, start, end
  }

  return {
    maxSum: globalMax,
    start,
    end,
  };
};
