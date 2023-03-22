// Problem: Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// Solution 1
// Time complexity of O(n * log(n)) assuming sort() uses merge sort
// Space complexity of O(1)

function findMissingInteger(array) {
  let missing = 1;
  array.sort().map((num) => {
    if (num == missing) {
      missing++;
    }
  });
  return missing;
}
console.log(findMissingInteger([1, 2, 0])); //3
console.log(findMissingInteger([3, 4, -1, 1])); //2
console.log(findMissingInteger([2, 6, 3, 4, -1, 1])); //5

// I couldn't solve this problem in linear time and constant space.
// I looked up the answers online and re-wrote the algorithm from memory to learn.
// Source: https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/

// Solution 2
// Time complexity of O(n)
// Space complexity of O(1)

function findMissingIntegerFast(array) {
  let isOnePresent = 0;
  array.map((num) => {
    if (num === 1) isOnePresent = 1;
  });
  if (!isOnePresent) return 1;

  const n = array.length;
  array.map((num, index) => {
    if (num > n || num < 1) array[index] = 1;
  });
  array.map((num) => {
    array[(num - 1) % n] += n;
  });
  let missing = 0;
  array.map((num, index) => {
    if (num < n + 1) missing = index + 1;
  });
  return missing || n + 1;
}
console.log(findMissingIntegerFast([1, 2, 0])); //3
console.log(findMissingIntegerFast([3, 4, -1, 1])); //2
console.log(findMissingIntegerFast([2, 6, 3, 4, -1, 1])); //5
