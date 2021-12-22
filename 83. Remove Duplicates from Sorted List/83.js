function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(head === null || head.next ===null) return head;
    var cur = head;

    while(cur.next !== null){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};


deleteDuplicates(
  new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3))))
      )
    )
  )
);
