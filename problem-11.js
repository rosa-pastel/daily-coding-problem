// Problem: Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

let dict = makeDictionaryTree(["dog", "deer", "deal"]);
console.log(autocomplete(dict, "de")); //  [deer, deal]

function autocomplete(dictRoot, s) {
  let node = dictRoot;
  let arr = [];
  if (!node) return arr;
  let val = node.data.slice(0, s.length);
  if (val === s) {
    arr.push(node.data);
    arr.push(...autocomplete(node.left, s));
    arr.push(...autocomplete(node.right, s));
  } else
    val > s
      ? (arr = autocomplete(node.left, s))
      : (arr = autocomplete(node.right, s));
  return arr;
}

function makeDictionaryTree(dict) {
  dict = [...new Set(dict.sort())];
  let root = {};
  let queue = [[root, dict]];
  while (queue.length > 0) {
    let node = queue[0][0];
    let dict = queue[0][1];
    if (dict.length < 2) {
      node.data = dict[0];
      node.left = null;
      node.right = null;
    } else if (dict.length < 3) {
      node.data = dict[1];
      node.left = dict[0];
      node.right = null;
    } else {
      node.data = dict[Math.floor(dict.length / 2)];
      node.left = {};
      node.right = {};
      queue.push([node.left, dict.slice(0, Math.floor(dict.length / 2))]);
      queue.push([node.right, dict.slice(Math.floor(dict.length / 2) + 1)]);
    }
    queue.shift();
  }
  return root;
}
