/*
Implement locking in a binary tree. A binary tree node can be locked or unlocked
 only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

is_locked, which returns whether the node is locked

lock, which attempts to lock the node. If it cannot be locked, then it should
 return false. Otherwise, it should lock it and return true.

unlock, which unlocks the node. If it cannot be unlocked, then it should return
 false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would
 like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.
*/
class Node {
  constructor(data, parent = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.locked = false;
  }
  childrenLockable() {
    let left = this.left;
    while (left) {
      if (!left.childrenLockable() || left.isLocked()) return false;
      left = left.left;
    }
    let right = this.right;
    while (right) {
      if (!right.childrenLockable() || right.isLocked()) return false;
      right = right.right;
    }
    return true;
  }
  parentsLockable() {
    let parent = this.parent;
    while (parent) {
      if (parent.isLocked()) return false;
      parent = parent.parent;
    }
    return true;
  }
  isLockable() {
    return (
      this.childrenLockable() && this.parentsLockable() && !this.isLocked()
    );
  }
  isUnlockable() {
    return this.childrenLockable() && this.parentsLockable() && this.isLocked();
  }
  isLocked() {
    return this.locked;
  }
  lock() {
    if (this.isLockable()) {
      this.locked = true;
      return true;
    }
    return false;
  }
  unlock() {
    if (this.isUnlockable()) {
      this.locked = false;
      return true;
    }
    return false;
  }
}

let tree = new Node(3);
tree.left = new Node(1, tree);
tree.left.left = new Node(0, tree.left);
tree.left.right = new Node(2, tree.left);
tree.right = new Node(4, tree);
console.log(tree.left.left.isLocked()); //false
console.log(tree.left.left.lock()); //true
console.log(tree.left.left.isLocked()); //true
console.log(tree.left.lock()); //false
