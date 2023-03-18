//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
function doesAddUpTo(arr, k) {
  let found = 0;
  arr.map((num, numIndex) => {
    if (
      arr.find((otherNum, otherNumIndex) => {
        if (numIndex === otherNumIndex) {
          return 0;
        }
        return num + otherNum === k;
      })
    ) {
      found = 1;
    }
  });
  return found;
}
console.log(doesAddUpTo([10, 15, 3, 7], 17));
