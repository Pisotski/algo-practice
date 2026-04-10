// Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

// responseTimes = [100, 200, 150,300]
// 2

// 1, 100
// 0

export default function countResponseTimeRegressions(
  responseTimes: number[],
): number {
  // Write your code here
  let numsGreaterThanPrev = 0;
  // numbers are always positive.
  // if number is the same as prev it shoudn't count

  // if array is empty, return 0
  if (!responseTimes.length) return 0;
  // start with average responseTimes[0]

  let average = responseTimes[0];
  let sumSoFar = responseTimes[0];
  // iterate through an array starting from the first element not 0est
  for (let i = 1; i < responseTimes.length; i++) {
    // recalculate average
    // keep track of the sumSoFar, then divide it by i (maybe i+1)
    const currNum = responseTimes[i]; //200
    sumSoFar += currNum; // 300
    average = sumSoFar / (i + 1); // 100 + 200 / 2 = 150
    // compare currNum with average
    // record if the currNum is greater > than average

    if (currNum > average) numsGreaterThanPrev++;
  }
  return numsGreaterThanPrev;
}
