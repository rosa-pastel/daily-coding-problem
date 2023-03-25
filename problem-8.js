/*
Problem:
A unival tree (which stands for "universal value") is a tree where 
all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/

function Node(value) {
  function countUnivalSubtrees() {
    let count = 0;
    function univalSubtrees(node) {
      if (!node) return 0;
      const left = node.left;
      const right = node.right;
      let isUnivalSubtree = 1;
      if (left && right) {
        let isLeftUnival = univalSubtrees(left);
        let isRightUnival = univalSubtrees(right);
        isUnivalSubtree =
          isLeftUnival &&
          isRightUnival &&
          left.data === node.data &&
          right.data === node.data;
      } else if (left) {
        isUnivalSubtree = univalSubtrees(left) && left.data === node.data;
      } else if (right) {
        isUnivalSubtree = univalSubtrees(right) && right.data === node.data;
      } else {
        isUnivalSubtree = 1;
      }
      if (isUnivalSubtree) count++;
      console.log(node.data + ": " + isUnivalSubtree);
      return isUnivalSubtree;
    }
    univalSubtrees(this);
    return count;
  }
  return { data: value, left: null, right: null, countUnivalSubtrees };
}
const tree = Node(0);
tree.left = Node(1);
tree.right = Node(0);
tree.right.right = Node(0);
tree.right.left = Node(1);
tree.right.left.left = Node(1);
tree.right.left.right = Node(1);
console.log(tree);
/*
{
  data: 0,
  left: { data: 1, left: null, right: null },
  right: {
    data: 0,
    left: { data: 1, left: [Object], right: [Object] },
    right: { data: 0, left: null, right: null }
  }
}
*/
console.log(tree.countUnivalSubtrees()); // 5
