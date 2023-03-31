/*
Problem:
Given an integer k and a string s, find the length of the 
longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest 
substring with k distinct characters is "bcb".
*/

console.log(lengthOfSubstr("abcba", 2)); //3

function lengthOfSubstr(s, k) {
  let arr = s.split("");
  let longest = [];
  let current = [];
  arr.map((char) => {
    current.push(char);
    let numberOfChars = [...new Set(current)].length;
    while (numberOfChars > k) {
      current.shift();
      numberOfChars = [...new Set(current)].length;
    }
    if (longest.length < current.length) longest = [...current];
  });
  return longest.length;
}
