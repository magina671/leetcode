function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    debugger;
  let newHead = new ListNode(0);
  let copy = head;
  let next;
  let tmp;
  while (copy) {
    next = copy.next;
    tmp = newHead;
    while (tmp.next && tmp.next.val < copy.val) {
      tmp = tmp.next;
    }
    copy.next = tmp.next;
    tmp.next = copy;
    copy = next;
  }

  return newHead.next;
};

const head = new ListNode(5, new ListNode(1, new ListNode(3, new ListNode(2))));

insertionSortList(head);
