/*
Problem:
A builder is looking to build a row of N houses that can be of K different
 colors. He has a goal of minimizing cost while ensuring that no two 
 neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the 
cost to build the nth house with kth color, return the minimum cost which
 achieves this goal.
*/
console.log(
  paintCost([
    [20, 10, 15],
    [12, 8, 13],
    [32, 35, 40],
  ])
); // 55
function paintCost(costMatrix) {
  let house = costMatrix.pop();
  let choices = [];
  house.forEach((colorCost, index) => {
    if (costMatrix.length < 1) choices.push(colorCost);
    else {
      let otherColors = costMatrix.slice();
      otherColors[otherColors.length - 1][index] = Infinity;
      choices.push(colorCost + paintCost(otherColors));
    }
  });
  return Math.min(...choices);
}
