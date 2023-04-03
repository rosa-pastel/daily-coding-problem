/*
Problem:
You run an e-commerce website and want to record the last N order ids in a log. 
Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller
than or equal to N.

You should be as efficient with time and space as possible.
*/

function LastOrders(log, N) {
  let head = { id: log.pop(), next: null, prev: null };
  let tail = head;
  for (i = 1; i < N; i++) {
    tail.next = { id: log.pop(), next: null, prev: tail };
    tail = tail.next;
  }
  tail.next = head;
  head.prev = tail;

  function record(orderId) {
    tail = tail.prev;
    head = { id: orderId, next: head, prev: tail };
    return this;
  }
  function getLast(i) {
    let order = head;
    for (count = 1; count < i; count++) {
      order = order.next;
    }
    return order.id;
  }
  return { record, getLast };
}

console.log(LastOrders([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6).getLast(1)); //12
console.log(LastOrders([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6).getLast(6)); //7
console.log(
  LastOrders([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6).record(13).getLast(6)
); //8
