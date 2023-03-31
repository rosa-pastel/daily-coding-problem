/*
Problem:
There exists a staircase with N steps, and you can climb up either 1 or 2 steps
 at a time. Given N, write a function that returns the number of unique ways 
 you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb
 any number from a set of positive integers X? For example, if X = {1, 3, 5}, 
 you could climb 1, 3, or 5 steps at a time.
*/

console.log(countSteps(4)); //5
console.log(countSteps(5)); //8

function countSteps(N) {
  if (N < 4) return N;
  return countSteps(N - 1) + countSteps(N - 2);
}

/*
I couldn't solve the second part of the problem instantly so I did some googling, 
figured I was on the right path(recursion and DP), tried again not doubting 
myself and it worked! Took me a couple hours though. If I were to solve it again, 
it would still take me hours. Following recursion steps is a real pain especially 
when you're passing arrays around. Using paper and pencil first does wonders.
*/

console.log(countFancySteps(5, [1, 3, 5])); //5
console.log(fancySteps(5, [1, 3, 5])); //[ [ 1, 1, 1, 1, 1 ], [ 1, 1, 3 ], [ 1, 3, 1 ], [ 3, 1, 1 ], [ 5 ] ]

function fancySteps(N, X) {
  let steps = [...new Set(X)];
  let allWays = [];
  steps.forEach((step) => {
    if (step === N) allWays.push([step]);
    else if (step < N) {
      let ways = fancySteps(N - step, X);
      ways.forEach((way) => way.unshift(step));
      allWays.push(...ways);
    }
  });
  return allWays;
}

function countFancySteps(N, X) {
  return fancySteps(N, X).length;
}
