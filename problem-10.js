/*
Problem:
Implement a job scheduler which takes in a function f and an integer n,
 and calls f after n milliseconds.
*/

function jobScheduler(f, n) {
  setTimeout(f, n);
}
