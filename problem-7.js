/*
Given the mapping a = 1, b = 2, ... z = 26, and 
an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since 
it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. 
For example, '001' is not allowed.
*/

function waysToDecode(msg) {
  const dict = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function countWays(message) {
    if (message.length === 1) {
      return 1;
    } else if (message.length === 2) {
      return dict[message] ? 2 : 1;
    } else {
      let combinations = countWays(message.slice(1));

      let firstTwoDecodes = !!dict[message.at(0) + message.at(1)];
      let twoAndThreeDecode = !!dict[message.at(1) + message.at(2)];

      //Second number is never combined with another number
      if (firstTwoDecodes && !twoAndThreeDecode) combinations *= 2;
      //Second number is already combined with another number in half of the combinations:
      else if (firstTwoDecodes) combinations *= 1.5;

      return combinations;
    }
  }
  return countWays(msg);
}
console.log(waysToDecode("6")); //1
console.log(waysToDecode("16")); //2
console.log(waysToDecode("111")); //3
console.log(waysToDecode("12719")); //4
console.log(waysToDecode("127199999999999999999")); //4
console.log(waysToDecode("12719999999999999999912")); //8
