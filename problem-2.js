// Problem: Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// With division:
function productExcept(array) {
  let product = 1;
  array.map((num) => {
    product *= num;
  });
  return array.map((num) => {
    return product / num;
  });
}

// Without division:
function productExceptNoDiv(array) {
  let product = Array(array.length).fill(1);
  array.map((num, i) => {
    array.map((number, index) => {
      if (i !== index) {
        product[i] *= number;
      }
    });
  });
  return product;
}

console.log(productExcept([3, 2, 1])); //[2,3,6]
console.log(productExceptNoDiv([1, 2, 3, 4, 5])); //[120, 60, 40, 30, 24]
