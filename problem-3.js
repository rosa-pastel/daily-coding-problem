//Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  if (!root) {
    return undefined;
  }
  return JSON.stringify({
    val: root.val,
    left: serialize(root.left),
    right: serialize(root.right),
  });
}

function deserialize(s) {
  const treeObj = JSON.parse(s);
  const left = treeObj.left ? deserialize(treeObj.left) : null;
  const right = treeObj.right ? deserialize(treeObj.right) : null;
  return new Node(treeObj.val, left, right);
}

const head = new Node(
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

console.log(deserialize(serialize(head)).left.left.val === "left.left"); // true
