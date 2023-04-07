/*
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/

const intersection = { data: 8, next: { data: 10, next: null } };
const a = {
  data: 3,
  next: { data: 7, next: intersection },
};
const b = {
  data: 3,
  next: {
    data: 99,
    next: { data: 1, next: intersection },
  },
};

console.log(findIntersection(a, b)); // { data: 8, next: { data: 10, next: null } }

/* 
I couldn't do it in O(M + N) by myself so I got the idea of using difference of lengths from 
https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/
*/

function findIntersection(a, b) {
  let node1 = a;
  let node2 = b;
  length1 = 0;
  while (node1.next) {
    length1++;
    node1 = node1.next;
  }
  length2 = 0;
  while (node2.next) {
    length2++;
    node2 = node2.next;
  }
  node1 = a;
  node2 = b;
  let diff = Math.abs(length1 - length2);
  for (let i = 0; i < diff; i++) {
    if (length1 > length2) node1 = node1.next;
    else node2 = node2.next;
  }
  while (node1.next && node2.next) {
    if (node1 === node2) return node1;
    node1 = node1.next;
    node2 = node2.next;
  }
}
