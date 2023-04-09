/*
Problem:
Given a dictionary of words and a string made up of those words (no spaces), return
 the original sentence in a list. If there is more than one possible reconstruction,
  return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string 
"thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string 
"bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 
'and', 'beyond'].
*/
console.log(
  wordsOfSentence(["quick", "brown", "the", "fox"], "thequickbrownfox") // ['the', 'quick', 'brown', 'fox']
);
console.log(
  wordsOfSentence(
    ["bed", "bath", "bedbath", "and", "beyond"],
    "bedbathandbeyond"
  ) // ['bed', 'bath', 'and', 'beyond']
);
function wordsOfSentence(dict, sentence) {
  list = [sentence];
  dict.forEach((word) => {
    list.forEach((part, index) => {
      part = part === word ? [part] : part.split(word);
      if (part.length > 1) {
        if (part[0] === "") part[0] = word;
        else if (part[part.length - 1] === "") part[part.length - 1] = word;
        else part.splice(1, 0, word);
        list[index] = part;
        list = list.flat();
      }
    });
  });

  return list.every((word) => dict.includes(word)) ? list : null;
}
