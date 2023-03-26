// Problem 9: Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
function findLargestSum(array) {
  if (array.length < 2) return array[0];
  let sumStartingZero;
  if (array.length < 3) sumStartingZero = array[0];
  else sumStartingZero = array[0] + findLargestSum(array.slice(2));
  let sumStartingOne = findLargestSum(array.slice(1));
  return Math.max(sumStartingOne, sumStartingZero);
}
console.log(findLargestSum([2, 4, 6, 2, 5])); // 13
console.log(findLargestSum([5, 1, 1, 5])); // 10
