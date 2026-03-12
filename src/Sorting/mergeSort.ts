// Merge sort is based on fundamental idea that merging sorted array are easy.
// Lets start by implementing merge two sorted arrays problem

export function mergeTwoSortedArrays(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  // while loop
  // condition: loop through the first array,
  // when it hits the end, append the leftovers from the second array
  // if second array pointer reached the end, append what's left of arr1
  // and break the loop
  while (arr1Pointer <= arr1.length) {
    if (arr1Pointer > arr1.length - 1) {
      result = result.concat(arr2.slice(arr2Pointer));
      break;
    }
    if (arr2Pointer > arr2.length - 1) {
      result = result.concat(arr1.slice(arr1Pointer));
      break;
    }

    const a1num = arr1[arr1Pointer];
    const a2num = arr2[arr2Pointer];

    if (a1num < a2num) {
      result.push(a1num);
      arr1Pointer++;
    } else {
      result.push(a2num);
      arr2Pointer++;
    }
  }

  return result;
}

mergeTwoSortedArrays([1, 3], [2]);

// ANSWER FROM CHATGPT
/**
 * 
  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
      result.push(arr1[arr1Pointer++]);
    } else {
      result.push(arr2[arr2Pointer++]);
    }
  }

  result = result.concat(arr1.slice(arr1Pointer));
  result = result.concat(arr2.slice(arr2Pointer));
 *
 */
// REFLECTION:
// i'm always trying not to be wasteful and not to merge empty arrays unnecessary
// I should stop worrying about constant operations and be more aware of awkwardly breaking a loop
// although my solution worked

// now with mergeTwoSortedArrays in place
// it's easy to implement merge sort

// you have to break an array in halves until it reaches one number and then
// merge compare both halves
/**
 * mergeTwoSortedArrays = MTSA
 * 9285 =>     92 and 85
 *             |      |
 *    MTSA(9 and 2) MTSA(8 and 5)
 *             29    58
 *           MTSA(29, 58)
 *              2589
 */

// BASE CASE: if array.len === 1;

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle);
  return mergeTwoSortedArrays(mergeSort(leftSide), mergeSort(rightSide));
}

// this part is solid
