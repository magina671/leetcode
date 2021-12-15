function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  debugger;
  function mergeSort(head) {
    if (head == null || head.next == null) {
      return head;
    }

    const middle = getMiddle(head);
    const nextOfMiddle = middle.next;

    middle.next = null;

    const left = mergeSort(head);

    const right = mergeSort(nextOfMiddle);

    const sortedList = sortedMerge(left, right);
    return sortedList;
  }

  function sortedMerge(a, b) {
    let result = null;

    if (a == null) return b;
    if (b == null) return a;

    if (a.val <= b.val) {
      result = a;
      result.next = sortedMerge(a.next, b);
    } else {
      result = b;
      result.next = sortedMerge(a, b.next);
    }
    return result;
  }

  function getMiddle(head) {
    if (head == null) return head;

    let slow = head,
      fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  head = mergeSort(head);

  return head;
};

const head = new ListNode(
  4,
  new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(1))))
);

sortList(head);
