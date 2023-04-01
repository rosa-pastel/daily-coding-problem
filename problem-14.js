/*
Problem:
The area of a circle is defined as πr^2. Estimate π to
 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/
function estimatePi(N = 1000) {
  let pointsInCircle = 0;
  for (let n = 0; n < N; n++) {
    let randomPointX = Math.random();
    let randomPointY = Math.random();
    let randomR = Math.sqrt(
      Math.pow(randomPointX, 2) + Math.pow(randomPointY, 2)
    );
    if (randomR <= 1) pointsInCircle++;
  }
  return ((4 * pointsInCircle) / N).toFixed(3);
}
console.log("Estimated pi with 100 iterations: " + estimatePi(100)); // 3.240
console.log("Estimated pi with 1000 iterations: " + estimatePi()); // 3.176
console.log("Estimated pi with 10000 iterations: " + estimatePi(10000)); // 3.144
console.log("Estimated pi with 100000 iterations: " + estimatePi(100000)); // 3.140
console.log("Estimated pi with 1000000 iterations: " + estimatePi(1000000)); // 3.142
