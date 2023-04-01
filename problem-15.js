/*
Problem:
Given a stream of elements too large to store in memory, pick
 a random element from the stream with uniform probability.
*/
function pickRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
console.log(pickRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
