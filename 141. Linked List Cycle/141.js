function ListNode(val, next) {
  this.val = val;
  this.next = next || null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// * TWO POINTERS SOLUTION
const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

// ! HASH MAP SOLUTION - BRUTE FORCE
const hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let set = new Set();

  while (head) {
    if (set.has(head)) {
      return true;
    }

    set.add(head);
    head = head.next;
  }

  return false;
};

// hasCycle(
//   new ListNode(
//     0,
//     new ListNode(2, new ListNode(3, new ListNode(-4, new ListNode(2))))
//   )
// );
